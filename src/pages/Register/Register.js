import React, { useRef } from "react";
import { useHistory } from "react-router";
import "./Register.scss";
import { ButtonRegisterLogin } from "../../components/Button/Button";
import { POST_USER_REGISTER } from "../../api/endpoints";
import axios from "axios";

export default function Register() {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const jobTitle = useRef();
  const experienceLevel = useRef();
  const location = useRef();

  const history = useHistory();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      jobTitle: jobTitle.current.value,
      experienceLevel: experienceLevel.current.value,
      location: location.current.value,
    };
    try {
      await axios.post(POST_USER_REGISTER, newUser);
      history.push("/login");
    } catch (err) {
      console.log("handleRegistration error -->", err);
    }
  };

  return (
    <div className="register">
      <div className="register__layer">
        <h1 className="register__title">Register</h1>
        <form className="register__form" onSubmit={handleRegistration}>
          {/* first name */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="register__input"
              type="text"
              name="firstName"
              placeholder="First Name"
              ref={firstName}
            />
          </div>
          {/* last name */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="lastName">
              Last Name
            </label>

            <input
              className="register__input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              ref={lastName}
            />
          </div>
          {/* username */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="username">
              Username
            </label>

            <input
              className="register__input"
              type="text"
              name="username"
              placeholder="Username"
              ref={username}
            />
          </div>
          {/* email */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="email">
              Email
            </label>

            <input
              className="register__input"
              type="email"
              name="email"
              placeholder="Email"
              ref={email}
            />
          </div>
          {/* password */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="password">
              Password
            </label>

            <input
              className="register__input"
              type="password"
              name="password"
              placeholder="Password"
              ref={password}
            />
          </div>
          {/* job title */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="jobTitle">
              Job Title
            </label>

            <input
              className="register__input"
              type="text"
              name="jobTitle"
              placeholder="Electrician"
              ref={jobTitle}
            />
          </div>
          {/* experience level */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="experienceLevel">
              Experience Level
            </label>

            <input
              className="register__input"
              type="text"
              name="experienceLevel"
              placeholder="Junior"
              ref={experienceLevel}
            />
          </div>
          {/* location */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="location">
              Location
            </label>

            <input
              className="register__input"
              type="text"
              name="location"
              placeholder="London"
              ref={location}
            />
          </div>
          {/* submit button */}
          <ButtonRegisterLogin buttonName="Create Account" />
        </form>
      </div>
    </div>
  );
}
