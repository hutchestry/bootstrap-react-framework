import React from "react";
import { Col, Container, Row, Button, Img } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import Monkey from "../assets/images/smart-monkey-cartoon-character-vector-removebg-preview.png"

function Agent() {
  return (
    <section className="bg-light">
    <Container>
      <Row className="justify-content-center align-items-center py-5">
      <Col xs={4} className="agent-wrapper">
					<div className="bubble bubble-bottom-left p-2">Great to meet you! If you have a resume, upload it and I'll create an account with your info. No resume? No problem! You can still create an account and I'll guide you through the process.</div>
					<img 
          src={Monkey}
          className="flip-image"
          alt="Smart Monkey Cartoon Character"
          />
      </Col>
      <Col xs={4} className="agent-wrapper">
        <LinkContainer to="/sign-up">
          <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">Upload your resume</Button>
        </LinkContainer>

        <div className="justify-content-center d-flex pt-1">or</div>

        <LinkContainer to="/sign-up">
          <a className="fs-4 d-flex justify-content-center align-items-center" type="submit">Get Started</a>
        </LinkContainer>
      </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Agent;
