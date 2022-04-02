import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

function Research() {
  return (
    <section className="bg-light">
    <Container>
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <Col xs={12} sm={8} lg={6}>
      </Col>
      <Col lg={6}>
        <h1 className="display-5 fw-bold lh-1 mb-3">Research</h1>
        <p className="lead">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
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

export default Research;
