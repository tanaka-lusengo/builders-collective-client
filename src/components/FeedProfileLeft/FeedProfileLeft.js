import React from "react";
import { AvatarFeed } from "../Avatar/Avatar";
import "./FeedProfileLeft.scss";
import "../RecentConnections/RecentConnections.scss";
import RecentConnections from "../RecentConnections/RecentConnections";
import { v4 as uuidv4 } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { PUBLIC_URL } from "../../api/endpoints";

//----------DummyData
import { Users } from "../../dummyData";

export default function FeedProfile() {
  return (
    <section className="profile">
      <div className="profile__top">
        <img
          className="profile__cover-img"
          src={PUBLIC_URL + "building-1.jpg"}
          alt="profile cover image"
        />
        <Link to="/profile">
          <AvatarFeed img={PUBLIC_URL + "temp-profile.jpg"} />
        </Link>
        <h3 className="profile__name">Bob the Builder</h3>
        <p className="profile__job-title">Bricklayer</p>
        <p className="profile__description"> It's what I do !</p>
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
