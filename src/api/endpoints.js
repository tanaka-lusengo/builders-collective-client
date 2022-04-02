// for predefined images
export const PUBLIC_URL = process.env.REACT_APP_PUBLIC_IMG;

const API_URL = process.env.REACT_APP_DB_URL;

// get Jobs
export const GET_ALL_JOBS = `${API_URL}/jobs`;

export const GET_JOBS_BY_TITLE_LOCATION = (jobTitle, location) =>
  `${API_URL}/jobs/${jobTitle}/${location}`;

export const GET_JOBS_BY_TITLE = (jobTitle) =>
  `${API_URL}/jobs/title/${jobTitle}`;

export const GET_JOBS_BY_LOCATION = (location) =>
  `${API_URL}/jobs/location/${location}`;

// database post routes
export const GET_ALL_POSTS = `${API_URL}/posts/all`;
export const POST_CREATE = `${API_URL}/post`;

// database user routes
export const GET_ALL_USERS = `${API_URL}/users/all`;
