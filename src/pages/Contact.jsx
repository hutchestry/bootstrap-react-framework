import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";




function Contact() {
  const { register, handleSubmit } = useForm();
const onSubmit = data => console.log(JSON.stringify(data));;

  return (
    <section className="bg-light">
      <Container>
        <Row className="align-items-center g-lg-5 py-5">
          <Col xs={12} sm={8} lg={7} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p className="fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </Col>
          <Col md={10} lg={5} className="mx-auto">
          <Form onSubmit={handleSubmit(onSubmit)} className="p-4 p-md-5 border rounded-3 bg-white">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                {...register("firstName", { required: true, maxLength: 20 })}
                 />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" size="lg" className="w-100" type="submit">
              Submit
            </Button>

          <hr />

            <small className="text-muted">By clicking Submit, you agree to the terms of use.</small>

          </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
