import React from "react";
import { Modal } from "react-bootstrap";

//componen
import Login from "./login";
import Regist from "./register";;

const Opsi = (opsi) => {
  if (opsi === 0) {
    return <Login />;
  } else if (opsi === 1) {
    return <Regist />;
  }
};

const MyModal = (props) => {
  return (
    <>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {Opsi(props.option)}
    </Modal>
    </>
  );
};

const Index = (props) => {
  const [show, setShow] = React.useState({
    show: false,
    conter: 0,
    option: 0,
  });

  const handeModal = () => {
    setShow({ show: false, conter: show.conter + 1, option: 0 });
  };

  React.useEffect(() => {
    setShow({ show: props.show, conter: props.conter, option: props.option });
  }, [props.counter]);

  return (
    <>
      <MyModal show={show.show} option={show.option} onHide={handeModal} />
    </>
  );
};

export default Index;
