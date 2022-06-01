import React, { useState, useEffect } from "react";
import apiClient from "./http-common";
import { Mappy } from "./Mappy";
import { Col, Row} from "react-bootstrap";
import Filters from "./Filters";
import { JobMini } from "./JobMini";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

// Stuff for AXIOS call
function escapeRegex(string) { // sanitizing the search term
  return encodeURIComponent(string.replace(/[' .*+?^${}()|[\]\\]/g, '').toLowerCase());
}

const JobData = (props) => {
  const [jobTotal, getTotalJobs] = useState("");
  const [loaded, loadingState] = useState(false);
  const [jobData, getJobs] = useState([]);
  const [searchParams] = useSearchParams([]);
  const state = {
    searchTerm: searchParams.get('search'),
    page: searchParams.get('page'),
    totalPages: Math.ceil(jobTotal/10),
    loaded: loaded
  }
  console.log(state);
  const url = `/job-directory/jobs?search=${escapeRegex(state.searchTerm)}&page=${state.page}&key=F95uhazqvZCNlYWDQE42`;

  useEffect(() => {
    getAllJobs();
  }, [url]);

  const getAllJobs = () => {
    apiClient.get(url)
    .then(function (response) {
      // handle success
      loadingState(true);
      getTotalJobs(response.data.total);
      getJobs(response.data.jobs);
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
          <Mappy jobs={jobData} />
          </Col>
          <Col lg={5}>
            <p><span className="fw-bold">{jobTotal} jobs for "{state.searchTerm}"! </span></p>
          <JobMini jobs={jobData} />

          {
            state && state.loaded && (
                <Pagination
                totPages={state.totalPages}
                currentPage={parseInt(state.page)}
              />
              )
            }
          </Col>
        </Row>
        </>
    )
}
export default JobData;
