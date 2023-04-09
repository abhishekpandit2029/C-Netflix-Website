import React from "react";
import "./Home.css";
import SignUp from "../SignUp/FirstPage/SignUp";
import Slideshome from "../Slides/Slideshome/Slideshome";
import Footer from "../Footer/Footer";
import BottomSignUp from "../BottomSignUp/BottomSignUp";


function Home() {
  return (
    <div className="Home">
      <SignUp/>
      <Slideshome/>
      <BottomSignUp/>
      <Footer/>
    </div>
  );
}

export default Home;
