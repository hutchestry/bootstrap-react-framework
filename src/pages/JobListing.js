import React from "react";
import { Container } from "react-bootstrap";
import JobsList from "../components/JobsList";

function JobListing() {
  return (
    <section className="bg-light">
      <Container>
        <JobsList />
      </Container>
    </section>
  );
}

export default JobListing;
