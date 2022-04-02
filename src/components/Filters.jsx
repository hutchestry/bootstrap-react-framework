import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";

function Filters() {
  return (
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="filter-nav" />
            <Navbar.Collapse className="row" id="filter-nav">

                <Form className="row align-items-end">
                  <Form.Group controlId="formJobSearch" className="col-sm-4 col-12 mb-3">
                    <Form.Label className="text-secondary">Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                  <Form.Group controlId="formJobSearch" className="col-sm-4 col-12 mb-3">
                      <Form.Label className="text-secondary">Keywords</Form.Label>
                      <Form.Control type="text" placeholder="Keywords" />
                  </Form.Group>
                  <Form.Group className="col-sm-1 col-12 mb-3">
                      <Button variant="primary" className="w-100 form-control fs-4" type="submit">GO!</Button>
                  </Form.Group>
                <NavDropdown className="col-sm-2 col-12 mb-3 m-auto"  title="Sort Results" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default Filters;
