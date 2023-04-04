import React from "react";
import "./Navbar.css";
import netflix_PNG from '../Stuff/netflix_PNG.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DialpadTwoToneIcon from "@mui/icons-material/DialpadTwoTone";
 
function nfNavbar() {
  return ( 
    <div> 
        <Navbar expand="lg" className='nav px-lg-5 px-md-5'>
            <Container fluid>
            <Navbar.Brand><img className='Weblogo' src={netflix_PNG} alt='Netflix logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-toggle="button" className="toggle">
              <span>
              <DialpadTwoToneIcon />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#link" className="text-white">Features</Nav.Link>
                    <Nav.Link href="#Services" className="text-white">Services</Nav.Link>
                    <Link to='/signIn'><Button className="navbtn">Sign In</Button></Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default nfNavbar;
