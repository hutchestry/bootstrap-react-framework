import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { candidateData } from "../data/candidateData";
import {LinkContainer} from 'react-router-bootstrap';

export const EditProfile = () => {

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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <section className="bg-light">
    <Container>
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <Col lg={12}>
            <h1 className="display-5 text-secondary lh-1 mb-3">Hi, John!</h1>
            <Row className="g-3">
              <Col xs={12} lg={3}>
                <div className="bg-white p-5 rounded d-flex flex-column align-items-center justify-content-center">
                  <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                  <div className="font-weight-bold">{firstName} {lastName}</div>
                  <div className="font-weight-bold">{email}</div>
                  <div className="font-weight-bold">{phone}</div>
                  <div className="mt-5 text-center">
                    <LinkContainer to="/profile">
                      <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                    </LinkContainer>
                  </div>
                </div>

              {/* <Row className="mt-3">
                <Form.Group  className="col-md-6">
                  <Form.Label className="labels">First Name</Form.Label>
                  <Form.Control type="text" className="form-control" placeholder="First Name" defaultValue={firstName} disabled />
                  </Form.Group>
                <Form.Group  className="col-md-6"><Form.Label className="labels">Last Name</Form.Label><Form.Control type="text" className="form-control" defaultValue={lastName} disabled placeholder="Last Name" /></Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group className="col-md-12"><Form.Label className="labels">Email Address</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={email} disabled /></Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group className="col-md-12"><Form.Label className="labels">Phone Number</Form.Label><Form.Control type="text" className="form-control" placeholder="Enter phone number" defaultValue={phone} disabled /></Form.Group>
              </Row> */}
              </Col>
              <Col xs={12} lg={9}>
                <Row>
              <Col xs={12} lg={6}>
                <div className="bg-white p-3 rounded">
              <Row className="mt-3 pb-3 border-bottom border-light border-2">            
                  <Form.Group className="col-md-12"><Form.Label className="labels">Employment Status</Form.Label><Form.Control type="text" className="form-control" placeholder="education" defaultValue={employmentSituation} /></Form.Group>
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">            
                  <Form.Group className="col-md-12"><Form.Label className="labels">Desired Type of Role</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>

                  {desiredTypeOfRole.map(role => (
                    <button className="pill-button" key={role}>{role}</button>
                  ))}
              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Skills</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                  {skills.map(skill => (
                    <button className="pill-button" key={skill}>{skill}</button>
                  ))}

              </Row>
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Fields Worked</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                  {fieldsWorked.map(worked => (
                    <button className="pill-button" key={worked}>{worked}</button>
                  ))}
              </Row>
              <Row className="mt-3">
                  <Form.Group className="col-md-12"><Form.Label className="labels">Fields Targeted</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                  {fieldsTargeted.map(targeted => (
                    <button className="pill-button" key={targeted}>{targeted}</button>
                  ))}
              </Row>
              </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="bg-white p-3 rounded">
              <Row className="mt-3 pb-3 border-bottom border-light border-2">
              {/* <Form.Group className="col-md-12"><Form.Label className="labels">Open to Relocation</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={relocation} disabled /></Form.Group> */}
              <Form.Check 
                type="switch"
                label="Open to Relocation"
                id="disabled-custom-switch"
                defaultValue={relocation}
              />
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
              <Form.Group className="col-md-12"><Form.Label className="labels">Location Desired</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={locationDesired} disabled /></Form.Group>
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Company</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                {targetCompanies.map(company => (
                  <button className="pill-button" key={company}>{company}</button>
                ))}
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Work Environment</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                {desiredWorkEnv.map(environment => (
                  <button className="pill-button" key={environment}>{environment}</button>
                ))}
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
                <Form.Group className="col-md-12"><Form.Label className="labels">Desired Benefits</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="Add Roles" disabled /></Form.Group>
                {desiredBenefits.map(bennies => (
                  <button className="pill-button" key={bennies}>{bennies}</button>
                ))}
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
              <Form.Group className="col-md-12"><Form.Label className="labels">Desired Vacation Days</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={desiredVacationDays} disabled /></Form.Group>
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
              <Form.Group className="col-md-12"><Form.Label className="labels">Desired Hours</Form.Label><Form.Control type="text" className="form-control d-none" placeholder="enter email id" defaultValue={desiredHours} disabled /></Form.Group>
                {desiredHours.map(hours => (
                  <button className="pill-button" key={hours}>{hours}</button>
                ))}
            </Row>
            <Row className="mt-3 pb-3 border-bottom border-light border-2">
              <Form.Group className="col-md-12"><Form.Label className="labels">Desired Dress Code</Form.Label><Form.Control type="text" className="form-control" placeholder="enter email id" defaultValue={desiredDressCode} disabled /></Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group className="col-md-12"><Form.Label className="labels">Desired Travel</Form.Label><Form.Control type="text" className="form-control" placeholder="Desired number of travel days" defaultValue={desiredTravel} disabled /></Form.Group>
            </Row>
            </div>
              </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </section>
  );
};


