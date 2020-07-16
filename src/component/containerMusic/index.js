import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ListCard from "./card";

// REDUX
import { connect } from "react-redux";
import { getAllMusicCreator } from "../../redux/actions/actionMusic";

// css
import "./list.css";

const Index = ({ data, getAllMusicCreator: read }) => {
  useEffect(() => {
    read();
  }, []);

  return (
    <Container className="cofl">
      <Row className="mt-5">
        {data !== null && data.length > 0
          ? data.map((lagu, i) => <ListCard index={i} {...lagu} />)
          : ""}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.musicReducer;
  return {
    data,
  };
};

export default connect(mapStateToProps, {
  getAllMusicCreator,
})(Index);
