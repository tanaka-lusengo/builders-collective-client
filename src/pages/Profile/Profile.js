import React from "react";
import "./Profile.scss";
import { v4 as uuidv4 } from "uuid";
import { ButtonFollow } from "../../components/Button/Button";
import MyNetworkFriends from "../../components/MyNetworkFriends/MyNetworkFriends";
import Feed from "../../components/Feed/Feed";
import {
  PUBLIC_URL,
  GET_USERS_BY_ID,
  GET_USER_FRIENDS_BY_ID,
  PUT_FOLLOW_FRIENDS_BY_ID,
  DELETE_UNFOLLOW_FRIENDS_BY_ID,
} from "../../api/endpoints";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user._id)
  );

  // get username in url dynamically
  const username = useParams().username;

  // getting data from Users Model in database
  const getUser = async () => {
    try {
      const response = await axios.get(
        GET_USERS_BY_ID(`?username=${username}`)
      );
      setUser(response.data);
    } catch (err) {
      console.log("getUser error -->", err);
    }
  };

  // get user friends
  const getUserFriends = async () => {
    try {
      const response = await axios.get(GET_USER_FRIENDS_BY_ID(user._id));
      setFriends(response.data);
    } catch (err) {
      console.log("getUserFriends error -->", err);
    }
  };

  // follow friend function
  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(DELETE_UNFOLLOW_FRIENDS_BY_ID(user._id), {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(PUT_FOLLOW_FRIENDS_BY_ID(user._id), {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log("handleFollow error -->", err);
    }
    setFollowed(!followed);
  };

  // get user
  useEffect(() => {
    getUser();
  }, [username]);

  // get user's friends
  useEffect(() => {
    getUserFriends();
  }, [user]);

  // check following of friend
  useEffect(() => {
    setFollowed(currentUser.following.includes(user._id));
  }, [currentUser, user]);

  let coverImg = PUBLIC_URL + "default-cover.jpeg";
  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    coverImg = PUBLIC_URL + user.coverPicture;
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

  return (
    <section className="profile">
      <div className="profile__layer">
        <section className="profile__middle">
          <img className="profile__cover" src={coverImg} alt="cover" />
          <img className="profile__img" src={avatarImg} alt="user profile" />
          <div className="profile__name-job">
            <h1 className="profile__name">
              {user.firstName + " " + user.lastName}
            </h1>
            <h3 className="profile__job">{user.jobTitle}</h3>
          </div>
          <div className="profile__info">
            <h2 className="profile__info-title">{user.firstName}'s Bio</h2>
            <span>
              {currentUser.username !== username && (
                <ButtonFollow
                  handleFollow={handleFollow}
                  buttonName={followed ? "UnFollow" : "+Follow"}
                />
              )}
            </span>
            <p className="profile__info-text">
              <span className="profile__info-text-item">Experience Level:</span>{" "}
              {user.experienceLevel}
            </p>
            <p className="profile__info-text">
              <span className="profile__info-text-item">Education:</span>{" "}
              {user.education}
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
        </section>
        <section className="profile__right">
          <h3 className="profile__title">{user.firstName + "'s Network"}</h3>
          {friends &&
            friends.map((friend) => {
              return (
                <MyNetworkFriends key={uuidv4()} friend={friend} user={user} />
              );
            })}
        </section>
      </div>
    </section>
  );
}
