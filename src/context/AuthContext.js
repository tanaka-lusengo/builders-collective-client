// 1. Initial setting up of Context
import { createContext, useReducer } from "react";

// after Actions and Reducer set up, import Reducer
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "62474139601d0de468c2eeac",
  //   firstName: "Clem",
  //   lastName: "Onojeghuo",
  //   username: "clem-onojeghuo",
  //   email: "clem-onojeghuo@builderscollective.com",
  //   password: "$2b$08$DeMAL/12LrzqimTkED/KTucRLoe4.QlfcVHxmJkWOtNy3ciO8RYj2",
  //   jobTitle: "Architect",
  //   experienceLevel: "Junior",
  //   location: "Manchester",
  //   about: "Love to draw!",
  //   skills: "An Artist of course",
  //   education: "Cambridge University",
  //   profilePicture: "clem-onojeghuo.jpg",
  //   coverPicture: "building-3.jpg",
  //   followers: [],
  //   following: [],
  //   isAdmin: false,
  // },
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // wrap <AuthContext.Provider> around App in index.js to be able to use on all children
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
