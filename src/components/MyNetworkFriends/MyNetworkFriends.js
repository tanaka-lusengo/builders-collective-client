import React from "react";
import "./MyNetworkFriends.scss";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../api/endpoints";

export default function MyNetworkFriends({ friend }) {
  return (
    <>
      <li className="recent">
        <div className="recent__friend-item-container">
          <Link to={`/profile/${friend.username}`}>
            <img
              className="recent__friend-img"
              src={PUBLIC_URL + friend.profilePicture}
              alt="friend profile"
            />
          </Link>
          {/* <span className="recent__friend-online"></span> */}
        </div>
        <div className="recent__friend-name-container">
          <p className="recent__friend-name">
            {friend.firstName + " " + friend.lastName}
          </p>
          <p className="recent__friend-name">-{friend.jobTitle}</p>
        </div>
      </li>
    </>
  );
}
