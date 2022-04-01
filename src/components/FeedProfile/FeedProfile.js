import React from "react";
import { AvatarFeed } from "../Avatar/Avatar";
import "./FeedProfile.scss";
import { v4 as uuidv4 } from "uuid";
import FeedRecentFriendList from "../FeedRecentFriendList/FeedRecentFriendList";
import { Link, useHistory } from "react-router-dom";

export default function FeedProfile({ ProfileImg, CoverImg, Users }) {
  const history = useHistory();
  const routeChange = () => {
    let path = `/profile`;
    history.push(path);
  };
  return (
    <section className="profile">
      <div className="profile__top">
        <img
          className="profile__cover-img"
          src={CoverImg}
          alt="profile cover image"
          onClick={routeChange}
        />
        <Link to="/profile">
          <AvatarFeed img={ProfileImg} />
        </Link>
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
            return <FeedRecentFriendList key={uuidv4()} user={user} />;
          })}
        </ul>
      </div>
    </section>
  );
}
