import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./FeedShare.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ButtonShare } from "../Button/Button";
import { AuthContext } from "../../context/AuthContext";
import { POST_SHARE, PUBLIC_URL, POST_UPLOAD_IMG } from "../../api/endpoints";
import axios from "axios";

export default function FeedShare({ getTimelinePosts }) {
  const { user } = useContext(AuthContext);
  const content = useRef();
  // if time, create file uploading functionality
  const [file, setFile] = useState(null);

  // submit share functionality
  const handleShareSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      content: content.current.value,
    };

    // creating a condition for if the user uploads a photo.
    if (file) {
      const formData = new FormData();
      const fileName = file.name; // usually give a unique name to each file to avoid conflicts - need to learn
      formData.append("file", file);
      formData.append("name", fileName);
      newPost.image = fileName;

      // upload image to local server
      try {
        await axios.post(POST_UPLOAD_IMG, formData);
      } catch (err) {
        console.log("handleShareSubmit Upload Image -->", err);
      }
    }

    try {
      await axios.post(POST_SHARE, newPost);
      await getTimelinePosts();
      content.current.value = "";
    } catch (err) {
      console.log("handleShareSubmit error -->", err);
    }
  };

  // condition to render avatar img
  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

  return (
    <section className="feed-share">
      <form className="feed-share__form" onSubmit={handleShareSubmit}>
        <div className="feed-share__top-container">
          <Link to={`/profile/${user.username}`}>
            <img className="feed-share__avatar" src={avatarImg} alt="profile" />
          </Link>
          <input
            className="feed-share__input"
            type="text"
            name="content"
            placeholder={`What would you like to share... ${user.firstName} ?`}
            autoComplete="false"
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
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <label className="feed-share__job-project-container">
            <WorkOutlineIcon />
            <p className="feed-share__share-job-project-text">Job/ Project</p>
          </label>
        </div>
      </form>
    </section>
  );
}
