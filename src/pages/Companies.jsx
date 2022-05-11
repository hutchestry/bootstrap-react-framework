import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

function Companies() {
  return (
    <section className="bg-light">
    <Container>
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <Col xs={12} sm={8} lg={6}>
      </Col>
      <Col lg={6}>
        <h1 class="display-5 fw-bold lh-1 mb-3">My Companies</h1>
        <p class="lead">Interested in a particular company? Add companies to you </p>
        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <Button variant="primary" size="lg" className>Primary</Button>
          <Button variant="outline-secondary" size="lg">Default</Button>
      </div> */}
      </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Companies;
