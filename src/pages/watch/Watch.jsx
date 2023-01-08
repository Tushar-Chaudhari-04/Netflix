import React from "react";
import "./Watch.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Player } from "video-react";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      {/* <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
        autoPlay progress controls /> */}

      <video controls autoPlay loop muted progress>
        <source src={require("../../videos/Thackeray Trailer.mp4")} />
        My Video
      </video>
    </div>
  );
};

export default Watch;
