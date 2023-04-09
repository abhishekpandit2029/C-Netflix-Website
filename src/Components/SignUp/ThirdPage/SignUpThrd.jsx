import React from "react";
import "./SignUpThrd.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import netflix_PNG from "../../Stuff/netflix_PNG.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Footer from "../../Footer/Footer"
import CheckIcon from '@mui/icons-material/Check';

function SignUpThrd() {
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
                    <p className="signupsec_fline">STEP 2 OF 3</p>
                    <p className="signupsec_sline">Choose your plan.</p>

                    <div className="checkIconSection">
                        <p><CheckIcon className="checkIcon"/> No commitments, cancel anytime.</p>
                        <p><CheckIcon className="checkIcon"/> Everything on Netflix for one low price.</p>
                        <p><CheckIcon className="checkIcon"/> No ads and no extra fees. Ever.</p>
                    </div>

                    <Link to='/signUpThrd'><button className="signupsecformbtn signup_btn_btm">Next</button></Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SignUpThrd;
