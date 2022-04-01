import React from "react";
import "./Button.scss";

const Button = ({ buttonName }) => {
  return <button className="button__button">{buttonName}</button>;
};

const ButtonFilter = ({ buttonName }) => {
  return (
    <button className="button__button button__button-filter">
      {buttonName}
    </button>
  );
};

const ButtonShare = ({ buttonName }) => {
  return (
    <button className="button__button button__button-share">
      {buttonName}
    </button>
  );
};

const ButtonRegisterLogin = ({ buttonName }) => {
  return (
    <button className="button__button button__button-register-login">
      {buttonName}
    </button>
  );
};

export { Button, ButtonFilter, ButtonShare, ButtonRegisterLogin };
