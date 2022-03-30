import React from "react";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="register__layer">
        <h1>Register</h1>
        <form className="register__form">
          {/* Name */}
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="First and Last Name" />
        </form>
      </div>
    </div>
  );
}
