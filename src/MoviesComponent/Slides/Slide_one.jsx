import React from "react";
import "./Slide_one.css";

function Slide_one() {
  return (
    <div className=" main_container_one">
      <div className="container_one">
        <div className="leftside_one">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>

        <div id="tv_container_one">
          <img src="https://techcrunch.com/wp-content/uploads/2017/04/netflix-tv-mockup.jpg?w=1390&crop=1" alt="firstimg" />
        </div>
      </div>
    </div>
  );
}

export default Slide_one;
