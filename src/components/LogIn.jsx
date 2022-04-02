import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));;
   
  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Email Address"
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
      <Button variant="primary" size="lg" className="w-100" type="submit">Sign In</Button>
      <hr />

      <small className="text-muted">By clicking Sign In, you agree to the terms of use.</small>
    </Form>
    </>
  );
}