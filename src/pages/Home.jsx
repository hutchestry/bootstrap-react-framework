import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button, Form } from "react-bootstrap";


const Home = (props) => {

  const [inputCompany, setinputCompany] = useState("");

  const handleChange = e => {
    setinputCompany(e.target.value);
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
  // this is for the first Link
  const urlParams = {
    company: inputCompany,
    page: 1,
  };
  console.log(urlParams);

  return (
    <section className="bg-light">
      <Container className=" py-5">
        <Row className="justify-content-center pb-5" style={{marginBottom: 100}}>
          <Col xs={4}>
            <h1 className="fs-1 text-secondary lh-1 mb-3 text-center">Search Jobs <span className="fs-6">(the old typy way)</span></h1>
            <Form className="align-items-end justify-content-center py-5">
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
                    <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">GO!</Button>
                  </Link>
              </Form.Group>
            </Form>

        {/* <form>
          <input
            value={inputCompany}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <Link to="/search" state={urlParams}>
            <button type="submit">
              Submit
            </button>
        </Link>
        </form> */}
          </Col>
          {/* <Col xs={2} className="align-items-center">
            <h1 className="fs-1 text-secondary lh-1 mb-5 text-center">~ Or ~</h1>
          </Col>
          <Col xs={6}>
            <h1 className="fs-1 text-secondary lh-1 text-center">Let your personal career agent help you create an account!</h1>
            <img 
            src={Monkey}
            className="flip-image"
            alt="Smart Monkey Cartoon Character"
            />
            <Form className="text-center pb-5">
              <Form.Text className="text-center mb-3 fs-5">Smash the big button, Let's Klimb!!</Form.Text>
              <Form.Group className="col-12 mb-3 text-center">
                  <LinkContainer to="/agent">
                    <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">big button!</Button>
                  </LinkContainer>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>
							<div className="card-wrapper">
								<div className="fs-1 text-secondary lh-1 mb-5 text-center">Build your own Career Agent Let them do the Klimbing for you!</div>
                <LinkContainer to="/agent">
                  <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">Get Started</Button>
                </LinkContainer>
              </div>
          </Col>
          <Col xs={4}>
            <div className="card-wrapper">
              <div className="fs-1 text-secondary lh-1 mb-5 text-center">Considering a Relocation? Explore Cities and States</div>
              <LinkContainer to="/sign-up">
                <Button variant="primary" className="form-control fs-4 d-flex justify-content-center align-items-center" type="submit">Explore</Button>
              </LinkContainer>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Home;
