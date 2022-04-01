import React from "react";
import "./Register.scss";
import { ButtonRegisterLogin } from "../../components/Button/Button";

export default function Register() {
  return (
    <div className="register">
      <div className="register__layer">
        <h1 className="register__title">Register</h1>
        <form className="register__form">
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
            />
          </div>
          {/* email */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="email">
              Email
            </label>

            <input
              className="register__input"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          {/* password */}
          <div className="register__content-container">
            <label className="register__label" htmlFor="password">
              Password
            </label>

            <input
              className="register__input"
              type="text"
              name="password"
              placeholder="Password"
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
            />
          </div>
          {/* submit button */}
          <ButtonRegisterLogin buttonName="Create Account" />
        </form>
      </div>
    </div>
  );
}
