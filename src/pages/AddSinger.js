import React, { useState } from "react";
// child
import Header from "../component/header";
import Singer from "../component/singer";
import LodBars from "../component/loader/Bars";

import { connect } from "react-redux";

const AddSinger = () => {
  document.title = "Singer";
  const [loadPage, setLoadPage] = useState(true);
  setTimeout(() => {
    setLoadPage(false);
  }, 2000);

  return (
    <>
      {loadPage ? (
        <LodBars />
      ) : (
        <>
          <Header />
          <Singer />
        </>
      )}
    </>
  );
};

export default connect()(AddSinger);
