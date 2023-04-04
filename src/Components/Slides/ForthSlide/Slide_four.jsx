import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Slide_four() {
  return (
    <center>
      <Container fluid>
        <Row className="even_container_one">
          <Col id="even_tv_container_one" lg={6}>
          <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
              alt="firstimg"
            />
          </Col>

          <Col className="even_leftside_one" lg={6}>
            <p className="even_leftside_one_lineone">Download your shows to watch offline.</p>
            <p className="even_leftside_one_linetwo">
            Save your favourites easily and always have something to watch.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="btmline"></div>
    </center>
  );
}

export default Slide_four;