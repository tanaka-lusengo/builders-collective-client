import React from "react";
import "./Login.scss";
import { ButtonRegisterLogin } from "../../components/Button/Button";

export default function Login() {
  return (
    <div className="login">
      <div className="login__layer">
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          {/* email */}
          <div className="login__content-container">
            <label className="login__label" htmlFor="email">
              Email
            </label>

            <input
              className="login__input"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          {/* password */}
          <div className="login__content-container">
            <label className="login__label" htmlFor="password">
              Password
            </label>

            <input
              className="login__input"
              type="text"
              name="password"
              placeholder="Password"
            />
          </div>
          {/* submit button */}
          <ButtonRegisterLogin buttonName="Login" />
        </form>
      </div>
    </div>
  );
}
