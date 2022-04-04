// 2. defining the Actions required before Reducer
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (userDetails) => ({
  type: "LOGIN_SUCCESS",
  payload: userDetails,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
