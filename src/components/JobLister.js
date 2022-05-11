import React from "react";
import { Buffer } from "buffer";

export default function JobLister(props) {
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
                  ).toString()}
                  jobPostDate={data.jobPostDate}
                  jobID={data.jobID}
                  jobApplyLink={data.jobApplyLink}
                  jobExpiration={data.jobExpiration}
                  jobLink={data.jobLink}
                />
              </div>
            );
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
  if (!company) return <div />;
  return (
    <div className="job-list-item">
      {/* <h5 className="jobjob-title">{jobTitle}</h5> */}
      <div className="listing-block">
        <div className="job-category">{jobCategory}</div>
        <div className="job-company">{company}</div>
      </div>
      <div className="listing-block">
        <div className="job-description">{jobDescription}</div>
      </div>
      <div className="listing-block">
        {/* <p className="job-type">{jobType}</p> */}
        <div className="job-location">{jobLocation}</div>
        <div className="job-id">{jobID}</div>
      </div>
      {/* <p className="job-postdate">{jobPostDate}</p> */}
      <div className="listing-block justify-center">
        <a className="job-apply-btn job-applylink" href={jobApplyLink}>
          Apply Now
        </a>
        <a className="job-apply-btn job-link" href={jobLink}>
          More Details
        </a>
      </div>
    </div>
  );
};