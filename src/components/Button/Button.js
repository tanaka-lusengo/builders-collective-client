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

export { Button, ButtonFilter };
