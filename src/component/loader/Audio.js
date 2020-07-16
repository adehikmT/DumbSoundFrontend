import React from "react";
import Loader from "react-loader-spinner";

// css
import "./loader.css";

const Audio = ({ to, visible }) => {
  return (
    <Loader
      className="loaded"
      type="Audio"
      color="#FFFFFF"
      timeout={to}
      visible={visible}
    />
  );
};

export default Audio;
