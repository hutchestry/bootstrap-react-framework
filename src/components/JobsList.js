import React, { useState, useEffect } from "react";
import apiClient from "./http-common";
import JobLister from "./JobLister"

export default function Parent(){
  const [jobs, getJobs] = useState("");

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    // apiClient.get('/place')
    apiClient.get('/job-directory/software/jobs?page=3&key=F95uhazqvZCNlYWDQE42')
    .then(function (response) {
      // handle success
      console.log(response);
      const jobData = response.data.jobs;
      getJobs(jobData);
    })
    .catch(error => console.error(`Error: $(error)`));
  }
    return(
      <JobLister jobs={jobs} />
    )
}
