import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AddUser from "../components/AddUser";
import Monkey from "../assets/images/smart-monkey-cartoon-character-vector-removebg-preview.png"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  data: {}
});

function SignUp() {
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
            <h2 className="display-4 text-secondary lh-1 mb-3 text-center">Your Account</h2>
            {/* <AddUser /> */}

            {/* <StateMachineProvider>
              <Router>
                <Route exact path="/sign-up" component={AddUser} />
                <Route path="/step2" component={Step2} />
                <Route path="/step3" component={Step3} />
                <Route path="/step4" component={Step4} />
                <Route path="/result" component={Result} />
              </Router>
            </StateMachineProvider> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
