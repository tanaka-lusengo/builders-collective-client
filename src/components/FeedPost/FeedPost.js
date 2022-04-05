import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./FeedPost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Timestamp } from "../../utilities/helper";
import { PUBLIC_URL, GET_USERS_BY_ID, POST_LIKES } from "../../api/endpoints";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function FeedPost({ post }) {
  //like states
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  // user states
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  // like button functionality
  const likeHandler = () => {
    try {
      axios.put(POST_LIKES(post._id), { userId: currentUser._id });
    } catch (err) {
      console.log("likeHandler error -->", err);
    }
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    !isLiked ? setIsLiked(true) : setIsLiked(false);
  };

  // updating db and setting condition to not update if it's our own post
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const getUser = async () => {
    const response = await axios.get(GET_USERS_BY_ID(`?userId=${post.userId}`));
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [post.userId]);

  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

  return (
    <section className="feed-post">
      <div className="feed-post__top-container">
        <div className="feed-post__top-container-name-avatar">
          <Link to={`/profile/${user.username}`}>
            <img className="feed-post__avatar" src={avatarImg} alt="profile" />
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
