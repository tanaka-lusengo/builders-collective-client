import React from "react";
import { AvatarFeed } from "../Avatar/Avatar";
import "./FeedProfileLeft.scss";
import "../RecentConnections/RecentConnections.scss";
import RecentConnections from "../RecentConnections/RecentConnections";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../api/endpoints";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../data/dummyUsers";

export default function FeedProfile() {
  const { user } = useContext(AuthContext);

  let coverImg = PUBLIC_URL + "default-cover.jpeg";
  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    coverImg = PUBLIC_URL + user.coverPicture;
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

  return (
    <section className="profile">
      <div className="profile__top">
        <img
          className="profile__cover-img"
          src={coverImg}
          alt="profile cover image"
        />
        <Link to={`/profile/${user.username}`}>
          <AvatarFeed img={avatarImg} />
        </Link>
        <h3 className="profile__name">
          {user.firstName + " " + user.lastName}
        </h3>
        <p className="profile__job-title">{user.jobTitle}</p>
        <p className="profile__description">{user.about}</p>
      </div>
      <div className="profile__bottom">
        <h3 className="profile__bottom-title">Recent Connections</h3>
        <ul className="profile__friend-list">
          {Users.map((user) => {
            return <RecentConnections key={uuidv4()} user={user} />;
          })}
        </ul>
      </div>
    </section>
  );
}
