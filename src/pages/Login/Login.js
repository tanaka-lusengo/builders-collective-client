import React, { useContext, useRef } from "react";
import "./Login.scss";
import { ButtonRegisterLogin } from "../../components/Button/Button";
import { loginCall } from "../../api/apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="login__layer">
        <h1 className="login__title">Login</h1>
        <form className="login__form" onSubmit={handleLogin}>
          {/* email */}
          <div className="login__content-container">
            <label className="login__label" htmlFor="email">
              Email
            </label>

            <input
              className="login__input"
              type="email"
              name="email"
              placeholder="Email"
              ref={email}
              required
            />
          </div>
          {/* password */}
          <div className="login__content-container">
            <label className="login__label" htmlFor="password">
              Password
            </label>

            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Password"
              ref={password}
              minLength={5}
              required
            />
          </div>
          {/* submit button */}
          <ButtonRegisterLogin buttonName="Login" />
        </form>
      </div>
    </div>
  );
}
