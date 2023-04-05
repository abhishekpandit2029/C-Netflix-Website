import React from "react";
import "./Oddslide.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
 
function Oddslide(props) {
  return (
    <center> 
    <Container fluid>
      <Row className="container_one">
        <Col className="leftside_one" lg={6}>
          <p className="leftside_one_lineone">{props.lineone}</p>
          <p className="leftside_one_linetwo">
          {props.linetwo}
          </p>
        </Col>

        <Col id="tv_container_one" lg={6}>
            <img
              src={props.src}
              alt="firstimg"
            />
        </Col>
      </Row>
    </Container>  
    <div className="btmline"></div>
    </center>
   
  );
}

export default Oddslide;
