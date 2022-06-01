import React, { useState, useEffect } from "react";
import apiClient from "./http-common";
import JobLister from "./JobLister";
import { useLocation } from "react-router-dom";
import { Mappy } from "./Mappy";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Filters from "./Filters";
import { JobMini } from "./JobMini";
import { jobData } from "./JobData";
// import { jobData } from "./JobData";


const JobData = (props) => {
  const [totalJobs, getTotalJobs] = useState("");
  const [jobs, getJobs] = useState("");
  const location = useLocation();
  const state = location.state;
  const url = `/job-directory/jobs?search=${state.company}&page=${state.page}&key=F95uhazqvZCNlYWDQE42`;
  // const url = `/place`;

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
      const total = response.data.total;
      getJobs(jobData);
      getTotalJobs(total);
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
          <Col lg={7}>
          <Mappy jobs={jobs} />
          </Col>
          <Col lg={5}>
          <div>
            <p><span className="fw-bold">Total Jobs: </span>{totalJobs}</p>
          </div>
          <JobMini jobs={jobs} />
          </Col>
        </Row>
        </>
    )
}
export default JobData;
