import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Filters from "../components/Filters";
import {Mappy} from "../components/Mappy";
import JobsList from "../components/JobsList"

function Search() {
  return (
    <section className="bg-light">
      <Container className=" py-5">
        <Row className="flex-lg-row-reverse align-items-center">
          <Col xs={12}>
            <Filters />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Mappy />
          </Col>

          <Col xs={12} sm={6}>
          <JobsList />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Search;
