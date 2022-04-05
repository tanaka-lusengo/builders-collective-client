import React, { useRef } from "react";
import "./Filter.scss";
import { ButtonFilter } from "../Button/Button";

export default function Filter({ getJobsByTitleOrLocation }) {
  // capture form values
  const jobRole = useRef();
  const location = useRef();

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let jobTitleVal = jobRole.current.value;
    let locationVal = location.current.value;
    try {
      await getJobsByTitleOrLocation(jobTitleVal, locationVal);
    } catch (e) {
      console.log("handleFilterSubmit() error -->", e);
    }
    form.reset();
  };

  return (
    <section className="filter">
      <div className="filter__layer">
        <form className="filter__form" onSubmit={handleFilterSubmit}>
          {/* location */}
          <div className="filter__form-location">
            <label
              className="filter__form-label filter__form-label-location"
              htmlFor="location"
            >
              Location
            </label>{" "}
            <br />
            <input
              className="filter__form-input"
              type="text"
              name="location"
              placeholder=" London..."
              ref={location}
            />
          </div>

          {/* job role */}
          <label className="filter__form-label" htmlFor="job-role"></label>
          <select
            className="filter__form-input filter__form-input-job"
            name="jobRole"
            ref={jobRole}
          >
            <option value="">Job Role</option>
            <option value="Architect">Architect</option>
            <option value="Site Manager">Construction/ Site Manager</option>
            <option value="Quantity Surveyor">Quantity Surveyor</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumbing">Plumbing & Heating Engineer</option>
            <option value="Air Conditioning Engineer">
              Air Conditioning Engineer
            </option>
            <option value="Bricklayer">Bricklayer</option>
            <option value="Carpenter">Carpenter</option>
          </select>

          {/* search button */}
          <ButtonFilter buttonName="Search" />
        </form>
      </div>
    </section>
  );
}
