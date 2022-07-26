import React from "react";
import "./Avatar.scss";

const AvatarHeader = ({ img }) => {
  return (
    <img className="avatar avatar__header " src={img} alt="user profile" />
  );
};

const AvatarFeed = ({ img }) => {
  return <img className="avatar avatar__feed " src={img} alt="user profile" />;
};

export { AvatarHeader, AvatarFeed };
