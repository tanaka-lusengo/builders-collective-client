import React from "react";
import "./Profile.scss";
import { v4 as uuidv4 } from "uuid";
import RecentConnections from "../../components/RecentConnections/RecentConnections";
import Feed from "../../components/Feed/Feed";
import { PUBLIC_URL, GET_USERS_BY_ID } from "../../api/endpoints";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Users } from "../../data/dummyUsers";

export default function Profile() {
  const [user, setUser] = useState({});

  // get username in url dynamically
  const username = useParams().username;

  // getting data from Users Model in database
  const getUser = async () => {
    const response = await axios.get(GET_USERS_BY_ID(`?username=${username}`));
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [username]);

  let coverImg = PUBLIC_URL + "default-cover.jpeg";
  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    coverImg = PUBLIC_URL + user.coverPicture;
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

  return (
    <section className="profile">
      <div className="profile__layer">
        <div className="profile__left">
          <h3 className="profile__bottom-title">My Network</h3>
          {Users.map((user) => {
            return <RecentConnections key={uuidv4()} user={user} />;
          })}
        </div>
        <div className="profile__right">
          <img className="profile__cover" src={coverImg} alt="cover" />
          <img className="profile__img" src={avatarImg} alt="profile picture" />
          <div className="profile__name-job">
            <h1 className="profile__name">
              {user.firstName + " " + user.lastName}
            </h1>
            <h3 className="profile__job">{user.jobTitle}</h3>
          </div>
          <div className="profile__info">
            <h2 className="profile__info-title">{user.firstName}'s Bio</h2>
            <p className="profile__info-text">
              <span className="profile__info-text-item">Experience Level:</span>{" "}
              {user.experienceLevel}
            </p>
            <p className="profile__info-text">
              <span className="profile__info-text-item">Skills:</span>{" "}
              {user.skills}
            </p>
            <p className="profile__info-text">
              <span className="profile__info-text-item">Location:</span>{" "}
              {user.location}
            </p>
            <p className="profile__info-text">
              <span className="profile__info-text-item">About:</span>{" "}
            </p>
            <p className="profile__info-text">{user.about}</p>{" "}
          </div>
          <div className="profile__feed-share">
            <Feed username={username} />
          </div>
        </div>
      </div>
    </section>
  );
}
