import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
//child
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import SectionList from "../component/containerMusic";
import LodBars from "../component/loader/Bars";
import PlayMusic from "../component/playMusic/index";

import { connect } from "react-redux";
import { CekUser } from "../redux/actions/actionPlay";

const Dashboard = ({ data, CekUser }) => {
  let Show = 0;

  if (data !== null) {
    Show = 1;
  }

  useEffect(() => {
    if (localStorage.token !== undefined) {
      CekUser(localStorage.token);
    }
  }, []);

  document.title = "DumbSound";
  const [loadPage, setLoadPage] = useState(true);
  setTimeout(() => {
    setLoadPage(false);
  }, 2000);

  return (
    <>
      {loadPage ? (
        <LodBars />
      ) : (
        <>
          <Header />
          <Parallax className="" y={[-20, 50]} tagInner="figure">
            <Jumbotron />
          </Parallax>
          <SectionList />
          {Show > 0 ? <PlayMusic /> : null}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.userSub;
  return {
    data,
  };
};

export default connect(mapStateToProps, { CekUser })(Dashboard);
