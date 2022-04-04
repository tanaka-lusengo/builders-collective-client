import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./FeedShare.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ButtonShare } from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { POST_SHARE, PUBLIC_URL } from "../../api/endpoints";
import axios from "axios";

export default function FeedShare({ getTimelinePosts }) {
  const { user } = useContext(AuthContext);

  // capture form data
  const content = useRef();

  // state for file uploaading
  const [file, setFile] = useState(null);

  // submit functionality
  const handleShareSubmit = async (e) => {
    e.preventDefault();
    const newpost = {
      userId: user._id,
      content: content.current.value,
      image: "default-post.jpg",
    };
    try {
      await axios.post(POST_SHARE, newpost);
      getTimelinePosts();
      content.reset();
    } catch (err) {
      console.log("handleShareSubmit error -->", err);
    }
  };

  return (
    <section className="feed-share">
      <form className="feed-share__form" onSubmit={handleShareSubmit}>
        <div className="feed-share__top-container">
          <Link to={`/profile/${user.username}`}>
            <img
              className="feed-share__avatar"
              src={
                user.profilePicture
                  ? PUBLIC_URL + user.profilePicture
                  : PUBLIC_URL + "default-profile.png"
              }
              alt="profile"
            />
          </Link>
          <input
            className="feed-share__input"
            type="text"
            name="content"
            placeholder={`What would you like to share... ${user.firstName} ?`}
            autocomplete="false"
            ref={content}
          />
        </div>
        <hr className="feed-share__divide" />
        <div className="feed-share__bottom-container">
          <label className="feed-share__share-container">
            <PresentToAllOutlinedIcon />
            <ButtonShare buttonName="Share" />
          </label>
          <label className="feed-share__share-container" htmlFor="file-upload">
            <AddPhotoAlternateIcon />
            <p className="feed-share__share-photo-text">Photo</p>
            <input
              type="file"
              className="feed-share__input-file"
              id="file-upload"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setFile(e.target.files(0))}
            />
          </label>
          <label className="feed-share__job-project-container">
            {/* ideally open a model */}
            <WorkOutlineIcon />
            <p className="feed-share__share-job-project-text">Job/ Project</p>
          </label>
        </div>
      </form>
    </section>
  );
}
