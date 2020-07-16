import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "./playMusic.css";

import { BASE_URL } from "../../redux/config/api";
import { connect } from "react-redux";

const MusicPlayer = (props) => {
  const { musicAll, index } = props;
  const playlist = musicAll.map((music) => ({
    name: music.title,
    singer: music.artis.name,
    cover: `${BASE_URL}/images/${music.thumbnail}`,
    musicSrc: music.attache,
  }));

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <ReactJkMusicPlayer
        mode="full"
        audioLists={playlist}
        defaultPlayIndex={0}
        autoPlay={false}
        showDownload={false}
        showThemeSwitch={false}
        toggleMode={true}
        responsive={true}
        glassBg={true}
        playIndex={index}
      />
      ,
    </div>
  );
};

const mapStateToProps = (state) => {
  const { index } = state.musicPlay;
  return {
    index,
  };
};

export default connect(mapStateToProps)(MusicPlayer);
