import React from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";

//component
import Alert from "../alert/authAlert";
// REDUX
import { connect } from "react-redux";
import { authRegistCreator } from "../../redux/actions/actionAuth";

const Regis = ({ loading, authRegistCreator }) => {
  const [user, setUser] = React.useState({});

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authRegistCreator(user);
    // await CekUser(localStorage.token);
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
      <Alert message="Register Success" />
      <Modal.Header className="bg-dark text-light" style={{ marginTop: -15 }}>
        <Modal.Title id="contained-modal-title-vcenter">
          Registration
        </Modal.Title>
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={user.fullName ? user.fullName : ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="gender"
              onChange={handleChange}
              value={user.gender ? user.gender : ""}
            >
              <option>Small select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Phone"
              name="phone"
              value={user.phone ? user.phone : ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Address"
              name="address"
              value={user.address ? user.address : ""}
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
  authRegistCreator,
})(Regis);
