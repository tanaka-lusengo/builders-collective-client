const API_URL = "http://localhost:8080";

// get Jobs
export const GET_ALL_JOBS = `${API_URL}/jobs`;

export const GET_JOBS_BY_TITLE_LOCATION = (jobTitle, location) =>
  `${API_URL}/jobs/${jobTitle}/${location}`;

export const GET_JOBS_BY_TITLE = (jobTitle) =>
  `${API_URL}/jobs/title/${jobTitle}`;

export const GET_JOBS_BY_LOCATION = (location) =>
  `${API_URL}/jobs/location/${location}`;
