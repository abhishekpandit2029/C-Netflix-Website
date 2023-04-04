import React from "react";
import "./Slide_one.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";

function Slide_one() {
  return (
    <center> 
    <Container fluid>
      <Row className="container_one">
        <Col className="leftside_one" lg={6}>
          <p className="leftside_one_lineone">Enjoy on your TV.</p>
          <p className="leftside_one_linetwo">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </Col>

        <Col id="tv_container_one" lg={6}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
              alt="firstimg"
            />
        </Col>
      </Row>
    </Container>  
    </center>
  );
}

export default Slide_one;
