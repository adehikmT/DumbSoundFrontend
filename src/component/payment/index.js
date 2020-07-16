import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//component
import Form from "./form"
import Alert from "../alert/transactionAlert";
//css
import "./payment.css";

const Index = () => {
  return (
    <>
      <Container className="justify-content-center container">
        <Row className="text-center">
          <Col>
            <span className="titlePay">Premium</span>
            <p className="desciption">
              pay now and enjoy contmporary music from <span className="dumb">DUMB</span><span className="sound">SOUND</span>
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="desciption">
            <span className="dumb">DUMB</span><span className="sound">SOUND : 09876543333</span>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} xs={10}>
          <Alert message="Transaction successfully"/>
          <Form/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
