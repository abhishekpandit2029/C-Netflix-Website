import React from "react";
import "./Home.css";
import SignUp from "../SignUp/SignUp";
import Slideshome from "../Slides/Slideshome/Slideshome";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <div className="Home">
      <SignUp/>
      <Slideshome/>
      <Footer/>
    </div>
  );
}

export default Home;
