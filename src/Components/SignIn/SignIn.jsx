import React from "react";
import "./SignIn.css";
import netflix_PNG from "../Stuff/netflix_PNG.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function SignIn() {
  return ( 
    <div>
      <div className="bg-img">
        <div className="signinnav">
          <Navbar expand="lg" className="nav px-lg-5 px-md-5">
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">
                  <img
                    className="Weblogo"
                    src={netflix_PNG}
                    alt="Netflix logo"
                  />
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <form className="container">
          <h1 className="text-light">Sign In</h1>
          <br></br>
          <input
            className="signininput"
            type="text"
            placeholder="Email or phone number"
            required
          />
          <input
            className="signininput"
            type="password"
            placeholder="Password"
            required
          />
          <button className="signinbtn text-light"><b>Sign In</b></button>

          <div className="firstLine">
            <div>
              <input value="true" type="checkbox" />
              <label className="text-light firstLineL">Remember me</label>
            </div>
            <a
              href="https://www.w3.org/Provider/Style/dummy.html"
              className="text-light firstLineA"
            >
              Need Help ?
            </a>
          </div>

          <div className="fcbk">
            <a href="https://www.w3.org/Provider/Style/dummy.html">
              <img
                src="https://i.ibb.co/LrVMXNR/social-fb.png"
                alt="Facebook"
              />
            </a>
            <p className="text-light">Login with Facebook</p>
          </div>

          <div className="signup">
            <p className="text-light">New to Netflix ?</p>
            <Link to="/">
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                className="text-light signupa"
              >
                Sign up now
              </a>
            </Link>
          </div>

          <div className="more">
            <p className="text-light">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                className="morea"
              >
                Learn more.
              </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
