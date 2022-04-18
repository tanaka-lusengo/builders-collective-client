import React from "react";
import "./MyNetworkOnline.scss";
import { PUBLIC_URL } from "../../api/endpoints";

export default function MyNetworkOnline({ user }) {
  return (
    <>
      <li className="recent">
        <div className="recent__friend-item-container">
          <img
            className="recent__friend-img"
            src={PUBLIC_URL + user.profilePicture}
            alt="friend profile image"
          />
          <span className="recent__friend-online"></span>
        </div>
        <div className="recent__friend-name-container">
          <p className="recent__friend-name">{user.username}</p>
          <p className="recent__friend-name">-{user.jobTitle}</p>
        </div>
      </li>
    </>
  );
}
