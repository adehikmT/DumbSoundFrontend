import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getAllMusicCreator } from "../../redux/actions/actionMusic";

import PlayMusic from "./Play";

const Index = ({ loading, error, data, getAllMusicCreator: read }) => {
  useEffect(() => {
    read();
  }, []);

  return data !== null && data.length > 0 ? (
    <PlayMusic musicAll={data}/>
  ) : null;
};

const mapStateToProps = (state) => {
  const { loading, data, error } = state.musicReducer;
  return {
    loading,
    error,
    data,
  };
};

export default connect(mapStateToProps, { getAllMusicCreator })(Index);

// https://p.scdn.co/mp3-preview/9af47d1865d4022ba07cbf931ffb7ffa47dc4dd6?cid=18fc7b00a64d447393f6ee0dd98a70be
