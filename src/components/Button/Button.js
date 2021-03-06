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
    <button className="button__button button__button-share" type="submit">
      {buttonName}
    </button>
  );
};

const ButtonHeader = ({ buttonName }) => {
  return (
    <button className="button__button button__button-header">
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

const ButtonFollow = ({ buttonName, handleFollow }) => {
  return (
    <button
      className="button__button button__button-follow"
      onClick={handleFollow}
    >
      {buttonName}
    </button>
  );
};

const ButtonMessaging = ({ buttonName, joinRoom }) => {
  return (
    <button
      className="button__button button__button-messaging"
      onClick={joinRoom}
    >
      {buttonName}
    </button>
  );
};

export {
  Button,
  ButtonFilter,
  ButtonShare,
  ButtonHeader,
  ButtonRegisterLogin,
  ButtonFollow,
  ButtonMessaging,
};
