import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import LogIn from "../components/LogIn";



function SignIn() {
  const { register, handleSubmit } = useForm();
const onSubmit = data => alert(JSON.stringify(data));;

  return (
    <section className="bg-light">
      <Container>
        <Row className="align-items-center g-lg-5 py-5">
          <Col xs={12} sm={4} className="mx-auto p-4 p-md-5 border rounded-3 bg-white">
          <h2 className="display-4 text-secondary lh-1 mb-3 text-center">Sign in to your account</h2>
            <LogIn />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignIn;
