// Home.js
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBox = (props) => {

  const [inputValue, setinputValue] = useState("");

  const handleChange = e => {
    setinputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // alert("you have searched for - " + inputCompany);
    // or you can send data to backend
  };

  const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
        <Form className="align-items-end justify-content-center py-5 row">
              <Form.Group controlId="formJobSearch" className="col-lg-10 mb-3">
                <Form.Label className="text-secondary">Search</Form.Label>
                <Form.Control 
                  value={inputValue}
                  onChange={handleChange}
                  onKeyPress={handleKeypress}
                  placeholder="Search jobs"
                />
              </Form.Group>
              <Form.Group className="col-lg-2 mb-3">
                  <Link to={`/jobs?search=${inputValue}&page=1`}>
                    <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">GO!</Button>
                  </Link>
              </Form.Group>
            </Form>
    </>
  );
};

export default SearchBox;



