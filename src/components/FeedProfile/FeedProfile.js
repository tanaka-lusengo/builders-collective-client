import React from "react";
import { AvatarFeed } from "../Avatar/Avatar";
import "./FeedProfile.scss";
import FeedRecentFriendList from "../FeedRecentFriendList/FeedRecentFriendList";

export default function FeedProfile({ ProfileImg, CoverImg, Users }) {
  return (
    <section className="profile">
      <div className="profile__top">
        <img
          className="profile__cover-img"
          src={CoverImg}
          alt="profile cover image"
        />
        <AvatarFeed img={ProfileImg} />
        <h3 className="profile__name">Tanaka Lusengo</h3>
        <p className="profile__job-title">Quantity Surveyor</p>
        <p className="profile__description">
          {" "}
          Young, Abitious, and ready to tackle a challenge however large or
          small!
        </p>
      </div>
      <div className="profile__bottom">
        <h3 className="profile__bottom-title">Recent Connections</h3>
        <ul className="profile__friend-list">
          {Users.map((user) => {
            return <FeedRecentFriendList key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </section>
  );
}
