import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function AddUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));;
   
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      
      {/* Email Address */}
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
      {/* / Email Address */}

    {/* First Name */}
    <Form.Group className="mb-3">

    <Form.Label>First Name</Form.Label>
    <Form.Control 
      type="text"
      placeholder="First Name"
              {...register("firstName", { pattern: /^[A-Za-z]+$/i })}
               />
    </Form.Group>
    {/* / First Name */}

        {/* Middle Name */}
        <Form.Group className="mb-3">
        <Form.Label>Middle Name</Form.Label>
    <Form.Control 
      type="text"
      placeholder="MIddle Name"
              {...register("middleName", { pattern: /^[A-Za-z]+$/i })}
               />
    </Form.Group>
    {/* / Middle Name */}

    {/* Last Name */}
    <Form.Group className="mb-3">
    <Form.Label>Last Name</Form.Label>
    <Form.Control 
      type="text"
      placeholder="Last Name"
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
               />
    </Form.Group>
    {/* / Last Name */}

      {/* Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
          type="password"
          placeholder="Password"
                  {...register("password", { required: true, maxLength: 20 })}
      />
      </Form.Group>
      {/* / Password */}

            {/* Repeat Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control 
          type="password"
          placeholder="Password"
                  {...register("password", { required: true, maxLength: 20 })}
      />
      </Form.Group>
      {/* / Repeat Password */}

      {/* Remember Me */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
      </Form.Group>
      {/* / Remember Me */}

      <Button variant="primary" size="lg" className="w-100" type="submit">Sign Up</Button>
<hr />

    <small className="text-muted">By clicking Sign Up, you agree to the terms of use.</small>
    </Form>
  );
}