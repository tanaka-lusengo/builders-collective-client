import React from "react";
import "./JobsList.scss";

export default function JobsList({ job }) {
  return (
    <>
      <article className="jobsList">
        <div className="jobsList__post-container">
          <div className="jobsList__avatar-container-default-jobsList">
            <div className="jobsList__avatar jobsList__avatar-past"></div>
          </div>

          <div className="jobsList__post-user-input">
            <div className="jobsList__job-title-employer-container">
              <div className="jobsList__job-title-apply-container">
                <h2 className="jobsList__sub-title jobsList__job-title">
                  <a
                    className="jobsList__apply"
                    href={job.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.jobTitle}
                  </a>
                </h2>
              </div>
              <h3 className="jobsList__sub-title jobsList__employer">
                {job.employerName}
              </h3>
            </div>
            <div className="jobsList__job-summary-container">
              <p className="jobsList__item">{job.locationName}</p>
              <p className="jobsList__item">
                {job.minimumSalary &&
                  job.maximumSalary &&
                  `£${job.minimumSalary} - £${job.maximumSalary}`}
              </p>
              <p className="jobsList__item">Applications: {job.applications}</p>
              <p className="jobsList__item">Expire: {job.expirationDate}</p>
            </div>
            <p className="jobsList__description-title">Description:</p>
            <p className="jobsList__description">{job.jobDescription}</p>
          </div>
        </div>
      </article>
    </>
  );
}
