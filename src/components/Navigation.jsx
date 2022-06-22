import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button'


function Navigation() {
  return (
        <Navbar bg="white" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link className="display-font__bold jumbo-text justify-content-center">
                klimb.ai
              </Nav.Link>
            </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="" id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/research">
                  <Nav.Link>
                    Research
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/companies">
                  <Nav.Link>
                    Companies
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/salaries">
                  <Nav.Link>
                    Salaries
                  </Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/agent">
                  <Nav.Link>
                      Agent
                  </Nav.Link>
                </LinkContainer> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <LinkContainer to="/agent">
                  <Nav.Link>
                    <Button>Sign Up</Button>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sign-in">
                  <Nav.Link>
                      Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default Navigation;
