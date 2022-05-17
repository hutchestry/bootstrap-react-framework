import React, { useState, useEffect } from "react";
import apiClient from "./http-common";
import JobLister from "./JobLister";
import { useLocation } from "react-router-dom";
import { Mappy } from "./Mappy";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Filters from "./Filters";
// import { jobData } from "./JobData";


const JobData = (props) => {
  const [jobs, getJobs] = useState("");
  const location = useLocation();
  const state = location.state;
  const url = `/job-directory/${state.company}/jobs?page=${state.page}&key=F95uhazqvZCNlYWDQE42`;

  useEffect((url) => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    // apiClient.get('/place')
    apiClient.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      const jobData = response.data.jobs;
      getJobs(jobData);
    })
    .catch(error => console.error(`Error: $(error)`));
  }
    return(
      <>
        <Row>
          <Col>
          <Filters state={state} />
          </Col>
        </Row>
        <Row>
          <Col>
          <Mappy jobs={jobs} />
          </Col>
          <Col>
          <JobLister jobs={jobs} />
          </Col>
        </Row>
        </>
    )
}
export default JobData;
