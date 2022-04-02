import React, { useState } from "react";
import "./FeedPost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Timestamp } from "../../utilities/helper";
import { PUBLIC_URL } from "../../api/endpoints";

export default function FeedPost({ post, users }) {
  // like button functionality
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    isLiked === false ? setIsLiked(true) : setIsLiked(false);
  };

  const matchUserName = (userId, postId) => {
    return userId === postId
      ? users.firstName + " " + users.lastName
      : "New User";
  };

  return (
    <section className="feed-post">
      <div className="feed-post__top-container">
        <div className="feed-post__top-container-name-avatar">
          <img
            className="feed-post__avatar"
            src={PUBLIC_URL + "default-profile.png"}
            alt="profile"
          />
          <p>{matchUserName(users._id, post.userId)}</p>
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
          <span className="feed-post__like-icon" onClick={likeHandler}>
            <FavoriteBorderOutlinedIcon />
          </span>
        </div>
      </div>
    </section>
  );
}

// users.profilePicture? users.profilePicture:
