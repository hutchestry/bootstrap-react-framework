import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AddUser from "../components/AddUser";
import Monkey from "../assets/images/smart-monkey-cartoon-character-vector-removebg-preview.png"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import LogIn from "../components/LogIn";
import {BasicIdentity} from "../components/BasicIdentity";
import { candidateData } from "../data/candidateData"
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

createStore({
  data: {
    firstName: candidateData.firstName,
    lastName:candidateData.lastName,
    email: candidateData.email
  }
});

function SignUp() {

const { register, handleSubmit } = useForm();
const onSubmit = data => alert(JSON.stringify(data));

  return (
    <section className="bg-light">
      <Container className=" py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className="agent-wrapper">
            <div className="bubble bubble-bottom-left p-2">Awesome! I pulled your name and email from your resume. Make any changes, create a password, and click the sign up button.</div>
            <img 
            src={Monkey}
            className="flip-image"
            alt="Smart Monkey Cartoon Character"
            />
          </Col>
          <Col xs={12} sm={4} className="p-4 p-md-5 border rounded-3 bg-white">
            <h2 className="display-4 text-secondary lh-1 mb-3 text-center">My Account</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label className="labels">First Name</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="First Name" defaultValue={candidateData.firstName}
                  {...register("firstName", { required: true })}  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="labels">Last Name</Form.Label>
                <Form.Control type="text" className="form-control" defaultValue={candidateData.lastName} placeholder="Last Name"
                  {...register("lastName", { required: true })}  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Email Address"
                defaultValue={candidateData.email}
                  {...register("email", { required: true })} 
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, maxLength: 20 })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <LinkContainer to="/profile">
                <Button variant="primary" size="lg" className="w-100" type="submit">Sign Up</Button>
              </LinkContainer>
              <hr />
              <small className="text-muted">By clicking Sign In, you agree to the terms of use.</small>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
