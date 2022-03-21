import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function AddUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));;
   
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control 
        type="text"
        placeholder="First Name"
                {...register("firstName", { required: true, maxLength: 20 })}
                 />
      <Form.Control 
        type="text"
        placeholder="Last Name"
                {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                 />
      <Form.Control
        type="number"
        placeholder="Age"
        {...register("age", { min: 18, max: 99 })} 
       />
        <Form.Control
       type="email"
       placeholder="Email Address"
        {...register("email", { required: true })} 
       />
      <Button type="submit">Submit</Button>
    </Form>
  );
}