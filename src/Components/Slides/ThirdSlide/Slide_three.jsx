import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Slide_three() {
  return (
    <center>
      <Container fluid>
        <Row className="container_one">
          <Col className="leftside_one" lg={6}>
            <p className="leftside_one_lineone">Create profiles for children.</p>
            <p className="leftside_one_linetwo">
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </Col>

          <Col id="tv_container_one" lg={6}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png"
              alt="firstimg"
            />
          </Col>
        </Row>
      </Container>
    </center>
  );
}

export default Slide_three;
