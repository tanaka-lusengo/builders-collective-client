const API_URL = process.env.REACT_APP_DB_URL;

// for predefined images
export const PUBLIC_URL = process.env.REACT_APP_PUBLIC_IMG;

// get Jobs
export const GET_ALL_JOBS = `${API_URL}/jobs`;

export const GET_JOBS_BY_TITLE_LOCATION = (jobTitle, location) =>
  `${API_URL}/jobs/${jobTitle}/${location}`;

export const GET_JOBS_BY_TITLE = (jobTitle) =>
  `${API_URL}/jobs/title/${jobTitle}`;

export const GET_JOBS_BY_LOCATION = (location) =>
  `${API_URL}/jobs/location/${location}`;

// database post routes
export const GET_TIMELINE_POSTS = (userId) =>
  `${API_URL}/post/timeline/${userId}`;

export const GET_USER_TIMELINE_POSTS = (username) =>
  `${API_URL}/post/profile/${username}`;

export const POST_CREATE = `${API_URL}/post`;

// database user routes
export const GET_USERS_BY_ID = (userId) => `${API_URL}/user${userId}`;
