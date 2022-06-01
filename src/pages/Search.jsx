import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Filters from "../components/Filters";
import {Mappy} from "../components/Mappy";
import JobsList from "../components/JobsList"
import { JobMini } from "../components/JobMini";

const Search = (props) => {

  const [inputCompany, setinputCompany] = useState("");

  const handleChange = e => {
    setinputCompany(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // alert("you have searched for - " + inputCompany);
    // or you can send data to backend
  };

  const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  // this is for the first Link
  const urlParams = {
    company: inputCompany,
    page: 1,
  };
  return (
    <section className="bg-light">
      <Container className=" py-5">
        {/* <Row className="flex-lg-row-reverse align-items-center">
          <Col xs={12}>
          <Form className="align-items-end justify-content-center py-5">
              <Form.Group controlId="formJobSearch" className="col-12 mb-3">
                <Form.Label className="text-secondary">Company</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Company"
                  value={inputCompany}
                  onChange={handleChange}
                  onKeyPress={handleKeypress}
                />
              </Form.Group>
              <Form.Group controlId="formJobSearch" className="col-12 mb-3">
                  <Form.Label className="text-secondary">Page</Form.Label>
                  <Form.Control type="text" placeholder="Page" />
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                  <Link to="/search" state={urlParams}>
                    <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">GO!</Button>
                  </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row> */}
          <JobsList />
          {/* <JobMini /> */}
      </Container>
    </section>
  );
}

export default Search;
