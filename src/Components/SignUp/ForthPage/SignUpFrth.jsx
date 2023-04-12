import React from 'react'
import "./SignUpFrth.css"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import netflix_PNG from "../../Stuff/netflix_PNG.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Footer from "../../Footer/Footer"
import CheckIcon from '@mui/icons-material/Check';
import PlanSection from './PlanSection';

function SignUpFrth() {

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
            <div className="signupsecplan">
                <div className="signupseccontainerplan">
                    <p className="signupsec_fline">STEP 2 OF 3</p>
                    <p className="signupsec_sline">Choose the plan that’s right for you.</p>

                    <div className="checkIconSectionplan">
                        <p className='checkpplan'><CheckIcon className="checkIcon" /> Watch all you want. Ad-free.</p>
                        <p className='checkpplan'><CheckIcon className="checkIcon" /> Recommendations just for you.</p>
                        <p className='checkpplan'><CheckIcon className="checkIcon" /> Change or cancel your plan anytime.</p>
                    </div>

                    <PlanSection />

                    <div className='planPassagebtm'>
                        <p className='planPassagebtm1'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                        <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                    </div>

                    <div>
                        <Link to='/'><button className="signupsecformbtn signup_btn_btm">Next</button></Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SignUpFrth