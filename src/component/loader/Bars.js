import React from "react";
import Loader from "react-loader-spinner";

// css
import "./loader.css";

const Bars = ({ to }) => {
  return (
    <Loader
      className="loading"
      type="Bars"
      color="#FFFFFF"
      height={100}
      width={100}
      timeout={to}
    />
  );
};

export default Bars;
