import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';

//css custom
import "./jumbotron.css";

const Index = () => {
  return (
    <>
      <Jumbotron className="bgImage">
      <Parallax className="" y={[-20, 150]} tagInner="figure">
        <Container className="text-center">
          <h1 className="dumbSound">Connect on DumbSound</h1>
          <p className="desSound">
            iscovery, Stream, and share a constantly expanding mix of music{" "}
            <br /> from emerging and major artists around the world
          </p>
        </Container>
        </Parallax>
      </Jumbotron>
    </>
  );
};

export default Index;
