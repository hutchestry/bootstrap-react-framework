import React from "react";
import { candidateData } from "../data/candidateData";
import { Button, Form, Row } from "react-bootstrap";

export const BasicIdentity = () => {
  return (
    <>
      <Basic
        id={candidateData.id}
        firstName={candidateData.firstName}
        lastName={candidateData.lastName}
      />
    </>
  );
};

const Basic = ({
  firstName,
  lastName,
}) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className="labels">First Name</Form.Label>
        <Form.Control type="text" className="form-control" placeholder="First Name" defaultValue={firstName} />
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="labels">Last Name</Form.Label>
        <Form.Control type="text" className="form-control" defaultValue={lastName} placeholder="Last Name" />
      </Form.Group>
    </>
  );
};
