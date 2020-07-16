import React from "react";
import { Alert } from "react-bootstrap";
import { MdError, FiCheckCircle } from "react-icons/all";

//Redux
import { connect } from "react-redux";

const Alerts = ({
  error,
  data,
  message,
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

  if (data !== null) {
    error = null;
  } else if (error !== null) {
    data = null;;
  } else {
    error = null;
    data = null;
  }

  return ShowMessage(
    error,
    data
  );
};

const mapStateToProps = (state) => {
  const { error, data } = state.singerReducer;

  return {
    error,
    data
  };
};

export default connect(mapStateToProps)(Alerts);
