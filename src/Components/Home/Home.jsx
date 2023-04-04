import React from "react";
import "./Home.css";
import SignUp from "../SignUp/SignUp";
import Slide_one from "../Slides/FirstSlide/Slide_one"
import Slide_two from "../Slides/SecondSlide/Slide_two"
import Slide_three from "../Slides/ThirdSlide/Slide_three";
import Slide_four from "../Slides/ForthSlide/Slide_four";

function Home() {
  return (
    <div className="Home">
      <SignUp/>
      <Slide_one/>
      <Slide_two/>
      <Slide_three/>
      <Slide_four/>
    </div>
  );
}

export default Home;
