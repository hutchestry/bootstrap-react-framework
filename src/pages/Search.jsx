// Search.js
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import apiClient from "../components/http-common";
import SearchBox from "../components/SearchBox";
import Pagination from "../components/Pagination";
import JobsList from "../components/JobsList";

// Stuff for AXIOS call
function escapeRegex(string) { // sanitizing the search term
  return encodeURIComponent(string.replace(/[' .*+?^${}()|[\]\\]/g, '').toLowerCase());
}

const Search = (props) => {
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

  return (
    <>
    <section className="bg-light">
      <Container className=" py-5">

      <SearchBox />

          <JobsList />

      {
        state && state.loaded && (
            <Pagination
            totPages={state.totalPages}
            currentPage={parseInt(state.page)}
          />
          )
        }
      </Container>
    </section>
    </>
  );
};

export default Search;