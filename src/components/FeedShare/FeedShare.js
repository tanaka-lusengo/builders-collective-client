import React from "react";
import "./FeedShare.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import { ButtonShare } from "../Button/Button";

export default function FeedShare({ ProfileImg }) {
  return (
    <section className="feed-share">
      <div className="feed-share__top-container">
        <img
          className="feed-share__avatar"
          src={ProfileImg}
          alt="profile image"
        />
        <input
          className="feed-share__input"
          type="text"
          name="share"
          placeholder="What would you like to share...?"
        />
      </div>
      <hr className="feed-share__divide" />
      <div className="feed-share__bottom-container">
        <div className="feed-share__share-container">
          <PresentToAllOutlinedIcon />
          <ButtonShare buttonName="Share" />
        </div>
        <div className="feed-share__job-project-container">
          {/* ideally open a model */}
          <WorkOutlineIcon />
          <p className="feed-share__share-job-project-text">Job/ Project</p>
        </div>
      </div>
    </section>
  );
}
