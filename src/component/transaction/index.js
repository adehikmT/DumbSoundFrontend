import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableTransaction from "./table";

//component
import Alert from "../alert/transactionAlert";

const Index = () => {
  return (
    <>
      <Container className="justify-content-center container" fluid>
        <Row className="justify-content-center mt-5">
          <Col md={4} xs={10} lg={12} className="mt-5">
          <Alert message="Transaction Update successfully"/>
            <TableTransaction />
          </Col>
        </Row>
      </Container>
    </> 
  );
};

export default Index;
