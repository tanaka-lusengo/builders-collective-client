import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GET_ALL_JOBS,
  GET_JOBS_BY_TITLE,
  GET_JOBS_BY_LOCATION,
  GET_JOBS_BY_TITLE_LOCATION,
} from "../../api/endpoints";
import "./ViewJobs.scss";
import Hero from "../../components/Hero/Hero";
import Filter from "../../components/Filter/Filter";
import JobsList from "../../components/JobsList/JobsList";
import { handlePageScroll } from "../../utilities/helper";
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ViewJobs() {
  const [allJobs, setAllJobs] = useState(null);

  // get all jobs from database
  const getAllJobs = async () => {
    const response = await axios.get(GET_ALL_JOBS);
    setAllJobs(response.data);
  };

  // function to filter jobs
  const getJobsByTitleOrLocation = async (jobTitle, location) => {
    if (jobTitle && location) {
      const response = await axios.get(
        GET_JOBS_BY_TITLE_LOCATION(jobTitle, location)
      );
      setAllJobs(response.data);
    } else if (!jobTitle && location) {
      const response = await axios.get(GET_JOBS_BY_LOCATION(location));
      setAllJobs(response.data);
    } else if (jobTitle && !location) {
      const response = await axios.get(GET_JOBS_BY_TITLE(jobTitle, location));
      setAllJobs(response.data);
    }
    handlePageScroll();
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  // safeguard function for when data has not been fetched from api
  const ringLoaderStyling = css`
    display: block;
    margin: 0 auto;
    border-color: #cc8d81;
  `;

  if (!allJobs) {
    return (
      <div className="viewJobs__loading">
        <ClipLoader css={ringLoaderStyling} size={100} />
      </div>
    );
  }

  return (
    <section className="viewJobs">
      <div className="viewJobs__layer">
        {allJobs && <Hero allJobs={allJobs} />}

        <div className="viewJobs__main-content-container">
          <section className="viewJobs__left">
            <Filter getJobsByTitleOrLocation={getJobsByTitleOrLocation} />
          </section>

          <section className="viewJobs__right">
            {allJobs &&
              allJobs.map((job) => {
                return <JobsList key={uuidv4()} job={job} />;
              })}
          </section>
        </div>
      </div>
    </section>
  );
}
