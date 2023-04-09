import React from "react";
import "./SignUpSec.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import netflix_PNG from "../../Stuff/netflix_PNG.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Footer from "../../Footer/Footer"

function SignUpSec() {
    return (
        <div>
            <div className="signinnav">
                <Navbar expand="lg" className="nav px-lg-5 px-md-5">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to="/">
                                <img className="Weblogo" src={netflix_PNG} alt="Netflix logo" />
                            </Link>
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Link to="/signIn"><a className="SignUpSecSignin">Sign In</a></Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div className="signupsecbox">
                <div className="signupseccontainer">
                    <p className="signupsec_fline">STEP 1 OF 3</p>
                    <p className="signupsec_sline">Create a password to start your membership</p>
                    <p className="signupsec_tline">Just a few more steps and you're done!</p>
                    <p className="signupsec_tline"> We hate paperwork, too.</p>
                    <div className="signup_secondLine_btm signupsecform">
                        <input
                            className="signup_input_btm"
                            type="Email"
                            placeholder="Email address"
                        />
                        <input
                            className="signup_input_btm"
                            type="password"
                            placeholder="Add a password"
                        />
                        <button className="signupsecformbtn signup_btn_btm">Next</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SignUpSec;
