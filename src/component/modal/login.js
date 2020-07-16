import React, { useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";

//component
import Alert from "../alert/authAlert";
// REDUX
import { connect } from "react-redux";
import { authLoginCreator } from "../../redux/actions/actionAuth";

const Login = ({ loading, authLoginCreator }) => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(user);
    await authLoginCreator(user);
    // console.log(localStorage.token)
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  const Load = (load) => {
    if (load) {
      return (
        <Spinner
          as="span"
          size="md"
          animation="border"
          role="status"
          arial-hidden="true"
        />
      );
    } else {
      return "Submit";
    }
  };

  return (
    <>
      <Alert message="Login Succes" />
      <Modal.Header className="bg-dark text-light" style={{ marginTop: -15 }}>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email ? user.email : ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password ? user.password : ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="danger" className="btn-block mb-3" type="submit">
            {Load(loading)}
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.authReducer;
  return {
    loading,
  };
};

export default connect(mapStateToProps, {
  authLoginCreator,
})(Login);
