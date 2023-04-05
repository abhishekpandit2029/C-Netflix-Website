import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="Footer">
      <p>Questions? Call 000-800-919-1694</p>
      <Container fluid>
        <Row className="Row">
          <Col className="Col" sm={6} md={3}>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </Col>

          <Col className="Col" sm={6} md={3}>
            <ul>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </Col>
          <Col className="Col" sm={6} md={3}>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </Col>

          <Col className="Col" sm={6} md={3}>
            <ul>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <p>Netflix India</p>
    </div>
  );
}

export default Footer;
