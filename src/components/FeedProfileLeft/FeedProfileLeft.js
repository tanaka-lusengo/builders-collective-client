import React, { useState, useEffect } from "react";
import { AvatarFeed } from "../Avatar/Avatar";
import "./FeedProfileLeft.scss";
import "../MyNetworkOnline/MyNetworkOnline.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { PUBLIC_URL, GET_USER_FRIENDS_BY_ID } from "../../api/endpoints";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyNetworkFriends from "../MyNetworkFriends/MyNetworkFriends";
import axios from "axios";

export default function FeedProfile() {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);

  // get user friends
  const getUserFriends = async () => {
    try {
      const response = await axios.get(GET_USER_FRIENDS_BY_ID(user._id));
      setFriends(response.data);
    } catch (err) {
      console.log("getUserFriends error -->", err);
    }
  };

  // get user's friends
  useEffect(() => {
    getUserFriends();
  }, [user]);

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
        <h3 className="profile__bottom-title">My Network</h3>
        <ul className="profile__friend-list">
          {friends.map((friend) => {
            return (
              <MyNetworkFriends key={uuidv4()} user={user} friend={friend} />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
