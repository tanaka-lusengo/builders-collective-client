// MongoDB URL
const API_URL = process.env.REACT_APP_DB_URL;

// Socket Server URL
export const SOCKET_SERVER = process.env.REACT_APP_SOCKET_SERVER;

//GOOGLE news URL
export const GOOGLE_NEWS = process.env.REACT_APP_GOOGLE_NEWS;

// for predefined images in local/public folder
export const PUBLIC_URL = process.env.REACT_APP_PUBLIC_IMG;

//----------------------------------------------------------
// Job api call routes

export const GET_ALL_JOBS = `${API_URL}/jobs`;

export const GET_JOBS_BY_TITLE_LOCATION = (jobTitle, location) =>
  `${API_URL}/jobs/${jobTitle}/${location}`;

export const GET_JOBS_BY_TITLE = (jobTitle) =>
  `${API_URL}/jobs/title/${jobTitle}`;

export const GET_JOBS_BY_LOCATION = (location) =>
  `${API_URL}/jobs/location/${location}`;

//----------------------------------------------------------
// PostModel routes

export const GET_TIMELINE_POSTS = (userId) =>
  `${API_URL}/post/timeline/${userId}`;

export const GET_USER_TIMELINE_POSTS = (username) =>
  `${API_URL}/post/profile/${username}`;

export const POST_SHARE = `${API_URL}/post`;

export const POST_DELETE = (id) => `${API_URL}/post/${id}`;

export const POST_LIKES = (id) => `${API_URL}/post/${id}/like`;

//----------------------------------------------------------
// UsertModel routes

export const POST_USER_LOGIN = `${API_URL}/login`;

export const POST_USER_REGISTER = `${API_URL}/register`;

export const GET_USERS_BY_ID = (userId) => `${API_URL}/user${userId}`;

export const GET_USER_FRIENDS_BY_ID = (userId) =>
  `${API_URL}/user/friends/${userId}`;

export const PUT_FOLLOW_FRIENDS_BY_ID = (userId) =>
  `${API_URL}/user/${userId}/follow`;

export const DELETE_UNFOLLOW_FRIENDS_BY_ID = (userId) =>
  `${API_URL}/user/${userId}/unfollow`;

//----------------------------------------------------------
// fileModel routes

export const POST_UPLOAD_IMG = `${API_URL}/upload`;
