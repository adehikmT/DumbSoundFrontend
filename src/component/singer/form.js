import React, { useState } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";

// REDUX
import { connect } from "react-redux";
import { postSingerCreator } from "../../redux/actions/actionSinger";

const FormSinger = ({ loading, error, postSingerCreator: post }) => {
  const [singer, setSinger] = useState({});

  const handleChange = (event) => {
    setSinger({ ...singer, [event.target.name]: event.target.value });
    // console.log(singer);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.token;
    console.log(singer);
    await post(singer, token);
    error === null ? setSinger({}) : setSinger(singer);
  };

  const Load = (load) => {
    if (load) {
      return (
        <Spinner
          as="span"
          size="sm"
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
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Row>
          <Col className="col-12">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={singer.name ? singer.name : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              type="text"
              placeholder="Enter Old"
              name="old"
              value={singer.old ? singer.old : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              size="md"
              as="select"
              name="type"
              value={singer.type ? singer.type : ""}
              onChange={handleChange}
            >
              <option>Select Gendre</option>
              <option value="Pop">pop</option>
              <option value="Rock">Rock</option>
              <option value="Reggae">Reggae</option>
              <option value="Dangdut">Dangdut</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control
              type="text"
              placeholder="Start Career"
              name="startCareer"
              value={singer.startCareer ? singer.startCareer : ""}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button variant="danger" className="btn-block mt-3" type="submit">
          {Load(loading)}
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, error } = state.singerReducer;
  return {
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  postSingerCreator,
})(FormSinger);
