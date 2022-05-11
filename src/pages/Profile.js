import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { candidateData } from "../data/candidateData"
import { JobMini } from "../components/JobMini";
import {LinkContainer} from 'react-router-bootstrap';


export const Profile = () => {

  return (
    <>
      <ProfileDetails
        id={candidateData.id}
        firstName={candidateData.firstName}
        lastName={candidateData.lastName}
        email={candidateData.email}
        phone={candidateData.phone}
        employmentSituation={candidateData.employmentSituation}
        desiredTypeOfRole={candidateData.desiredTypeOfRole}
        video={candidateData.video}
        skills={candidateData.skills}
        fieldsWorked={candidateData.fieldsWorked}
        fieldsTargeted={candidateData.fieldsTargeted}
        relocation={candidateData.relocation}
        locationDesired={candidateData.locationDesired}
        targetCompanies={candidateData.targetCompanies}
        desiredWorkEnv={candidateData.desiredWorkEnv}
        desiredBenefits={candidateData.desiredBenefits}
        desiredVacationDays={candidateData.desiredVacationDays}
        desiredHours={candidateData.desiredHours}
        desiredDressCode={candidateData.desiredDressCode}
        desiredTravel={candidateData.desiredTravel}
      />
    </>
  );
};

const ProfileDetails = ({
  firstName,
  lastName,
  email,
  phone,
  employmentSituation,
  desiredTypeOfRole,
  video,
  skills,
  fieldsWorked,
  fieldsTargeted,
  relocation,
  locationDesired,
  targetCompanies,
  desiredWorkEnv,
  desiredBenefits,
  desiredVacationDays,
  desiredHours,
  desiredDressCode,
  desiredTravel
}) => {

// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <section className="bg-light">
    <Container>
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <Col lg={12}>
            <fieldset>
              <Row className="g-3">
                <Col xs={12} lg={3}>
                <h1 className="display-5 text-secondary lh-1 mb-3">Hi, John!</h1>
                  <div className="bg-white p-5 rounded d-flex flex-column align-items-center justify-content-center">
                    <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                    <div className="font-weight-bold">{firstName} {lastName}</div>
                    <div className="font-weight-bold">{email}</div>
                    <div className="font-weight-bold">{phone}</div>
                    <div className="mt-5 text-center">
                    <LinkContainer to="/edit-profile">
                        <button className="btn btn-primary profile-button" type="button">Edit Profile</button>
                    </LinkContainer>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={9}>
                  <Row>
                <Col xs={12} lg={6}>
                  <h2 className="display-6 text-secondary lh-1 mt-1 mb-3">Job Matches</h2>
                  <JobMini />
                </Col>
                <Col xs={12} lg={6}>
                  <h2 className="display-6 text-secondary lh-1 mt-1 mb-3">Job Matches</h2>
                  <div className="bg-white p-3 rounded">
                <Row className="mt-3 pb-3 border-bottom border-light border-2">
                {/* <Form.Group className="col-md-12"><Form.Label className="labels">Open to Relocation</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={relocation}  /></Form.Group> */}
                <Form.Check 
                  type="switch"
                  label="Open to Relocation"
                  id="-custom-switch"
                  defaultValue={relocation}
                />
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Location Desired</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={locationDesired}  /></Form.Group>
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Company</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles"  /></Form.Group>
                  {targetCompanies.map(company => (
                    <button className="pill-button" key={company}>{company}</button>
                  ))}
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Work Environment</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles"  /></Form.Group>
                  {desiredWorkEnv.map(environment => (
                    <button className="pill-button" key={environment}>{environment}</button>
                  ))}
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Desired Benefits</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles"  /></Form.Group>
                  {desiredBenefits.map(bennies => (
                    <button className="pill-button" key={bennies}>{bennies}</button>
                  ))}
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Desired Vacation Days</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={desiredVacationDays}  /></Form.Group>
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Desired Hours</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="enter email id" defaultValue={desiredHours}  /></Form.Group>
                  {desiredHours.map(hours => (
                    <button className="pill-button" key={hours}>{hours}</button>
                  ))}
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Desired Dress Code</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={desiredDressCode}  /></Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group className="col-md-12"><Form.Label className="labels">Desired Travel</Form.Label><Form.Control type="text" className="form-control" placeholder="Desired number of travel days" defaultValue={desiredTravel}  /></Form.Group>
              </Row>
              </div>
                </Col>
                  </Row>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
    </Container>
    </section>
  );
};


