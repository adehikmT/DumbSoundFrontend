import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Forms from "./form";

//component
import Alert from "../alert/singerAlert";

const Index = () => {
  return (
    <>
      <Container className="justify-content-center container" fluid>
        <Row className="justify-content-center mt-5">
          <Col md={4} xs={10} lg={10}>
            <Alert message="Singer seved successfully" />
            <Forms />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
