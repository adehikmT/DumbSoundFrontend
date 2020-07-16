import React,{useState} from "react";
// child
import Header from "../component/header";
import Music from "../component/music";
import LodBars from "../component/loader/Bars";

const AddMusic = () => {
  document.title = "Music";
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
          <Music />
        </>
      )}
    </>
  );
};

export default AddMusic;
