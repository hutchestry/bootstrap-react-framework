import React, {useState} from "react";
import { Buffer } from "buffer"; // convert from base64
import Collapse from 'react-bootstrap/Collapse'

export const JobMini = (props) => {
  const { jobs } = props;

  if (jobs.length > 0) {
  return (
    <>
        {jobs.map((data, key) => {
          return (
            <div key={key}>
              <Job
                key={key}
                company={data.company}
                jobTitle={data.jobTitle}
                jobCategory={data.jobCategory}
                jobType={data.jobType}
                jobLocation={data.jobLocation}
                jobDescription={Buffer.from(
                  data.jobDescription,
                  "base64"
                ).toString().replace(/(\.\s+)/g,"\$1<br /><br />")}
                jobPostDate={data.jobPostDate}
                jobID={data.jobID}
                jobApplyLink={data.jobApplyLink}
                jobExpiration={data.jobExpiration}
                jobLink={data.jobLink}
              />
            </div>
          );
        // }).filter((e,k) => k < 10)}
        })}
    </>
  );
} else {
  return (<h3>No Jobs to display</h3>)
};
};

const Job = ({
  company,
  jobTitle,
  jobCategory,
  jobType,
  jobLocation,
  jobDescription,
  jobPostDate,
  jobID,
  jobApplyLink,
  jobLink,
}) => {
  const [open, setOpen] = useState(false);
  if (!company) return <div />;

  return (
    <div className="bg-white p-3 mb-3 rounded">
      <h6 className="fw-bold">{jobTitle} | <span className="text-capitalize">{company}</span></h6>
      <div className="job-location">
        {jobLocation} 
        <a className="job-link text-end" 
          // href={}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
        More Details
        </a>
        <Collapse in={open}>
        <div>
          <div className="job-description"> {jobDescription}</div>
          <div className="listing-block justify-center">
            <a className="job-apply-btn job-applylink mt-3" href={jobApplyLink} target='blank'>
              Apply Now
            </a>
          </div>
        </div>
      </Collapse>
      </div>
      {/* <p>{jobDescription}</p> */}

    </div>
  );
};