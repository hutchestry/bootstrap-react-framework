import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filters = (props) => {

  const [inputCompany, setinputCompany] = useState("");
  console.log(inputCompany);

  const handleChange = e => {
    setinputCompany(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("you have searched for - " + inputCompany);
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
    company: inputCompany ? inputCompany : "1234",
    page: 1,
  };
  return (
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="filter-nav" />
            <Navbar.Collapse className="row" id="filter-nav">

            {/* <Form className="align-items-end justify-content-center py-5">
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
                    <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit" onClick={handleSubmit}>GO!</Button>
                  </Link>
              </Form.Group> */}
                {/* <NavDropdown className="col-sm-2 col-12 mb-3 m-auto"  title="Sort Results" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> 
                </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default Filters;
