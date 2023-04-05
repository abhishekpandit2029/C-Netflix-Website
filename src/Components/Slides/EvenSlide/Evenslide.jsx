import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Evenslide.css"

function Evenslide(props) { 
  return (
    <center>
      <Container fluid>
        <Row className="even_container_one">
          <Col id="even_tv_container_one" lg={6}>
            <img
              src={props.src}
              alt="firstimg"
            />
          </Col>

          <Col className="even_leftside_one" lg={6}>
            <p className="even_leftside_one_lineone">{props.lineone}</p>
            <p className="even_leftside_one_linetwo">
            {props.linetwo}
            </p>
          </Col>
        </Row> 
      </Container>
      <div className="btmline"></div>
    </center>
  );
}

export default Evenslide;


