import React from "react";
import videostyle from "./Videofile.module.css";
import videofile from "../assets/video.mp4";

function Videofile() {
  return (
    <div className={videostyle.main}>
      <video loop={true} autoPlay="autoplay" muted className={videostyle.video}>
        <source src={videofile} type="video/mp4" />
      </video>
    </div>
  );
}

export default Videofile;
