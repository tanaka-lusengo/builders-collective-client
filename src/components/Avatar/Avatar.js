import React from "react";
import "./Avatar.scss";

const AvatarHeader = ({ img }) => {
  return (
    <img className="avatar avatar__header " src={img} alt="profile picture" />
  );
};

const AvatarFeed = ({ img }) => {
  return (
    <img className="avatar avatar__feed " src={img} alt="profile picture" />
  );
};

export { AvatarHeader, AvatarFeed };
