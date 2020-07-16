import React from "react";
import { Alert } from "react-bootstrap";
import { MdError, FiCheckCircle } from "react-icons/all";

//Redux
import { connect } from "react-redux";

const Alerts = ({
  error,
  data,
  message,
  errorMusic,
  dataMusic,
  errorSinger,
  dataSinger,
}) => {
  const ShowMessage = (error, data) => {
    if (error !== null) {
      return (
        <>
          <Alert variant="danger">
            <MdError /> {error}
          </Alert>
        </>
      );
    } else if (data !== null) {
      return (
        <>
          <Alert variant="primary">
            <FiCheckCircle />
            {message}
          </Alert>
        </>
      );
    } else {
      return "";
    }
  };

  if (data || dataMusic || dataSinger !== null) {
    error = null;
    errorMusic = null;
    errorSinger = null;
  } else if (error || errorMusic || errorSinger !== null) {
    data = null;
    dataMusic = null;
    dataSinger = null;
  } else {
    error = null;
    errorMusic = null;
    errorSinger = null;
    data = null;
    dataMusic = null;
    dataSinger = null;
  }

  return ShowMessage(
    error || errorMusic || errorSinger,
    data || dataMusic || dataSinger
  );
};

const mapStateToProps = (state) => {
  const { error, data } = state.authReducer;
  const { error: errorMusic, data: dataMusic } = state.musicReducer;
  const { error: errorSinger, data: dataSinger } = state.singerReducer;

  return {
    error,
    data,
    errorMusic,
    dataMusic,
    errorSinger,
    dataSinger,
  };
};

export default connect(mapStateToProps)(Alerts);
