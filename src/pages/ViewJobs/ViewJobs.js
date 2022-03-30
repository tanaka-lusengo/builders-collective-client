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
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ViewJobs() {
  const [allJobs, setAllJobs] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // get all jobs from database
  const getAllJobs = async () => {
    const response = await axios({
      method: "GET",
      url: GET_ALL_JOBS,
      params: { page: pageNumber },
    });

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
  };

  useEffect(() => {
    getAllJobs();
  }, [pageNumber]);

  // safeguard function for when data has not been fetched from api
  const customStyling = css`
    display: block;
    margin: 0 auto;
    border-color: #cc8d81;
  `;

  if (!allJobs) {
    return (
      <div className="viewJobs__loading">
        <ClipLoader css={customStyling} size={100} />
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

// function to filter jobs by title
// const onFilterSubmission = () => {
//   const jobTitles = [
//     "Architect",
//     "Site Manager",
//     "Quantity Surveyor",
//     "Electrician",
//     "Plumbing",
//     "Air Conditioning Engineer",
//     "Bricklayer",
//     "Carpenter",
//   ];
// switch statement to filter database depending on job title clicked
//   switch (jobTitles) {
//     case jobTitles[0]:
//       getJobsByTitle(jobTitles[0]);
//       break;
//     case jobTitles[1]:
//       getJobsByTitle(jobTitles[1]);
//       break;
//     case jobTitles[2]:
//       getJobsByTitle(jobTitles[2]);
//       break;
//     case jobTitles[3]:
//       getJobsByTitle(jobTitles[3]);
//       break;
//     case jobTitles[4]:
//       getJobsByTitle(jobTitles[4]);
//       break;
//     case jobTitles[5]:
//       getJobsByTitle(jobTitles[5]);
//       break;
//     case jobTitles[6]:
//       getJobsByTitle(jobTitles[6]);
//       break;
//     case jobTitles[7]:
//       getJobsByTitle(jobTitles[7]);
//       break;
//     default:
//       getAllJobs();
//       break;
//   }
// };
