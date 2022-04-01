import React from "react";
import "./CommunityFeed.scss";
import FeedProfile from "../../components/FeedProfile/FeedProfile";
import Feed from "../../components/Feed/Feed";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
// items below will be comming from Database - just filler for now...
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";
import CoverImg from "../../assets/images/cover-image/building-1.jpg";
import PostImg from "../../assets/images/post-images/post-1.jpg";
import { Posts } from "../../data/dummyPosts";
import { Users } from "../../data/dummyUsers";

export default function CommunityFeed() {
  // safeguard function for when data has not been fetched from api
  const ringLoaderStyling = css`
    display: block;
    margin: 0 auto;
    border-color: #cc8d81;
  `;

  if (!Posts || !Users) {
    return (
      <div className="viewJobs__loading">
        <ClipLoader css={ringLoaderStyling} size={100} />
      </div>
    );
  }

  return (
    <section className="community-feed">
      <div className="community-feed__layer">
        {/* left */}
        {Users && (
          <FeedProfile
            ProfileImg={ProfileImg}
            CoverImg={CoverImg}
            Users={Users}
          />
        )}
        {/* center */}
        {Posts && (
          <Feed
            ProfileImg={ProfileImg}
            PostImg={PostImg}
            Posts={Posts}
            Users={Users}
          />
        )}
        {/* right */}
      </div>
    </section>
  );
}
