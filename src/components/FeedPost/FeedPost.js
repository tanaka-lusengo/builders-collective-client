import React, { useState } from "react";
import "./FeedPost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function FeedPost({ post, users }) {
  // like button functionality
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    isLiked === false ? setIsLiked(true) : setIsLiked(false);
  };

  return (
    <section className="feed-post">
      <div className="feed-post__top-container">
        <div className="feed-post__top-container-name-avatar">
          <img
            className="feed-post__avatar"
            src={users.find((user) => user.id === post.userId).profilePicture}
            alt="profile image"
          />
          <p>{users.find((user) => user.id === post.userId).username}</p>
        </div>
        <p>Posted: {post.date}</p>
      </div>

      <div className="feed-post__middle-container">
        <div className="feed-post__middle-container-content">
          <img className="feed-post__img" src={post.image} alt={post.name} />
          <p className="feed-post__text">{post.description}</p>
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
