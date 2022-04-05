import axios from "axios";
import { errorNotify } from "../utilities/helper";
import { POST_USER_LOGIN } from "./endpoints";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    // posting user input from login page and initialising Context api Actions
    const response = await axios.post(POST_USER_LOGIN, userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    errorNotify();
  }
};
