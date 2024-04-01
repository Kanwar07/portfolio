import React, { useContext } from "react";
import { data } from "../context/Context";
import videostyle from "./Videofile.module.css";
import videofile from "../assets/video.mp4";

function Videofile() {
  const { video } = useContext(data);
  return (
    <div className={videostyle.main}>
      <video loop="true" autoplay="autoplay" muted className={videostyle.video}>
        <source src={videofile} type="video/mp4" />
      </video>
    </div>
  );
}

export default Videofile;
