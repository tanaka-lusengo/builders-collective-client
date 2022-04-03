import React from "react";
import "./FeedShare.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ButtonShare } from "../Button/Button";
import { PUBLIC_URL } from "../../api/endpoints";
// import { v4 as uuid4 } from "uuid";
// import { POST_CREATE, GET_ALL_POSTS } from "../../api/endpoints";
// import axios from "axios";

export default function FeedShare({}) {
  return (
    <section className="feed-share">
      {/* onSubmit={handlePostSubmit} */}
      <form className="feed-share__form">
        <div className="feed-share__top-container">
          <img
            className="feed-share__avatar"
            src={PUBLIC_URL + "temp-profile.jpg"}
            alt="profil"
          />
          <input
            className="feed-share__input"
            type="text"
            name="content"
            placeholder="What would you like to share...?"
          />
        </div>
        <hr className="feed-share__divide" />
        <div className="feed-share__bottom-container">
          <div className="feed-share__share-container">
            <PresentToAllOutlinedIcon />
            <ButtonShare buttonName="Share" />
          </div>
          <div className="feed-share__share-container">
            <AddPhotoAlternateIcon />
            <ButtonShare buttonName="Photo" />
          </div>
          <div className="feed-share__job-project-container">
            {/* ideally open a model */}
            <WorkOutlineIcon />
            <p className="feed-share__share-job-project-text">Job/ Project</p>
          </div>
        </div>
      </form>
    </section>
  );
}
