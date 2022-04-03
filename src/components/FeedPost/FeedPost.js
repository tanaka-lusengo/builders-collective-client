import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeedPost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Timestamp } from "../../utilities/helper";
import { PUBLIC_URL, GET_USERS_BY_ID } from "../../api/endpoints";
import axios from "axios";

export default function FeedPost({ post }) {
  // like button functionality
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const likeHandler = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    isLiked === false ? setIsLiked(true) : setIsLiked(false);
  };

  // getting data from Users Model in database
  const getUser = async () => {
    const response = await axios.get(GET_USERS_BY_ID(`?userId=${post.userId}`));
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [post.userId]);

  return (
    <section className="feed-post">
      <div className="feed-post__top-container">
        <div className="feed-post__top-container-name-avatar">
          <Link to={`/profile/${user.username}`}>
            <img
              className="feed-post__avatar"
              src={user.profilePicture || PUBLIC_URL + "default-profile.png"}
              alt="profile"
            />
          </Link>
          <p>{user.firstName + " " + user.lastName}</p>
        </div>
        <p>Posted: {Timestamp(post.createdAt)}</p>
      </div>

      <div className="feed-post__middle-container">
        <div className="feed-post__middle-container-content">
          <img
            className="feed-post__img"
            src={PUBLIC_URL + post.image}
            alt="post"
          />
          <p className="feed-post__text">{post.content}</p>
        </div>
      </div>

      <div className="feed-post__bottom-container">
        <div className="feed-post__like-container">
          <p className="feed-post__like-counter">{likes}</p>
          <span className="feed-post__like-icon">
            <FavoriteBorderOutlinedIcon onClick={likeHandler} />
          </span>
        </div>
      </div>
    </section>
  );
}

// users.profilePicture? users.profilePicture:
