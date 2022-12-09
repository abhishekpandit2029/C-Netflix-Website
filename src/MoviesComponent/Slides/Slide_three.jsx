import React from "react";
import "./Slide_three.css";

function Slide_three() { 
  return (
    <div className="container_three">
      <div className="leftside_three">
        <h1>Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h2>
      </div>

      <div id="tv_container_three">
        <div className="monitor_three"></div>
        <video
          className="tv-video2_three"
          autoPlay
          playsinline
          muted
          loop
          width="300"
          height="240"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Slide_three;
