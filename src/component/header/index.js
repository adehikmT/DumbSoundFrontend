import React, { useState, useLayoutEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
//component
import Modal from "../modal";
import Profile from "./profile";
//gambar
import Logo from "../../public/assets/logo.svg";
import DumbSound from "../../public/assets/dumbsound.svg";

//Redux
import { connect } from "react-redux";

const Index = ({ data }) => {
  let login = false;

  //useractive
  (data !== null && data > 200) || localStorage.token
    ? (login = true)
    : (login = false);

  const [modalShow, setModalShow] = useState({
    show: false,
    conter: 0,
    option: 0,
  });

  const handeModal = (opsi) => {
    setModalShow({ show: true, conter: modalShow.conter + 1, option: opsi });
  };

  const isLogin = (data) => {
    if (data) {
      return <Profile />;
    } else {
      return (
        <>
          <Modal
            show={modalShow.show}
            counter={modalShow.conter}
            option={modalShow.option}
          />
          <Button
            className="mr-3 sm-mt-1"
            size="sm"
            variant="outline-light"
            onClick={() => handeModal(0)}
          >
            <span className="p-3">Login</span>
          </Button>
          <Button
            className="mr-3 sm-mr-1"
            size="sm"
            variant="outline-danger"
            onClick={() => handeModal(1)}
          >
            <span className="p-2">Register</span>
          </Button>
        </>
      );
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={scrolled ? "bg-dark pt-3 pb-3 pl-5 pr-5" : "pt-3 ml-4 mr-4"}
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img
            src={DumbSound}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="DumbSound"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="sm-mr-auto">{isLogin(login)}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.authReducer;
  return {
    data,
  };
};

export default connect(mapStateToProps)(Index);
