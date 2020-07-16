import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import LoadAu from "../loader/Audio";

import { BASE_URL } from "../../redux/config/api";

import { connect } from "react-redux";
import { PlayMusic } from "../../redux/actions/actionPlay";

import "./list.css";

const Cards = (props) => {
  const { year, thumbnail, title, index, PlayMusic } = props;
  const singer = props.artis.name;
  const [isLading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const show = (load) => {
    if (!load) {
      return (
        <>
          <Card.Img
            key={props.key + "lklk"}
            className="p-2 img-responsive"
            variant="top"
            src={BASE_URL + "/images/" + thumbnail}
          />
          <span className="musicTitle">
            {title} <small className="year">{year}</small>
          </span>
          <small className="singer">{singer}</small>
        </>
      );
    }
  };

  return (
    <>
      <Col lg={2} className="mt-5">
        <Card
          key={props.key}
          style={{cursor:"pointer"}}
          className="musicCard bg-dark"
          onClick={() => PlayMusic({index:index})}
        >
          <LoadAu to={15000} visible={isLading} />
          {show(isLading)}
        </Card>
      </Col>
    </>
  );
};

export default connect(null, { PlayMusic })(Cards);
