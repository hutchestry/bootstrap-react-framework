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
  return encodeURIComponent(string.replace(/['.*+?^${}()|[\]\\]/g, '').toLowerCase());
}

const JobData = (props) => {
  const [jobTotal, getTotalJobs] = useState(0);
  const [loaded, loadingState] = useState(false);
  const [jobData, getJobs] = useState([]);
  const [searchParams] = useSearchParams([]);
  const state = {
    searchTerm: searchParams.get('search'),
    page: searchParams.get('page'),
    totalPages: Math.ceil(jobTotal/10),
    loaded: loaded
  }
  // console.log(state);
  const url = `/job-directory/jobs?search=${escapeRegex(state.searchTerm)}&page=${state.page}&key=${process.env.REACT_APP_JOB_API_KEY}`;

  useEffect(() => {
    getAllJobs();
  }, [url]);

  const getAllJobs = () => {
    loadingState(false);
    apiClient.get(url)
    .then(function (response) {
      console.log(response);
      // handle success
      loadingState(true);
      getTotalJobs(response.data.total?response.data.total:0);
      getJobs(response.data.jobs);
    })
    .catch(error => {
      console.error(`Error: $(error)`);
      (<h3>Sorry, we didn't find any jobs that match!! Please search again. </h3>)
      }
    );
  }
    return(
      <>
        {/* <Row>
          <Col>
          <Filters state={state} />
          </Col>
        </Row> */}
        <Row>
          <Col lg={7}>
          {state && state.loaded && jobData && jobData.length > 0 && (
          <Mappy jobs={jobData} state={state} />
          )}
          </Col>
          <Col lg={5}>

            

            {state && state.loaded ? (
              <>
                <p><span className="fw-bold">{jobTotal} jobs for "{state.searchTerm}"! </span></p>
              
              {jobData && jobData.length > 0 ? (
                <>
                <JobMini jobs={jobData} state={state} />
    
                <Pagination
                  totPages={state.totalPages}
                  currentPage={parseInt(state.page)}
                />
              </>
              ):
              <h3>Sorry, we didn't find any jobs that match!! Please search again. </h3>
              }
              </>
            ): 
            <h3>Loading...</h3>}
          </Col>
        </Row>
        </>
    )
}
export default JobData;
