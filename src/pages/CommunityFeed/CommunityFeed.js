import React, { useEffect, useState } from "react";
import "./CommunityFeed.scss";
import FeedProfileLeft from "../../components/FeedProfileLeft/FeedProfileLeft";
import FeedNewsRight from "../../components/FeedNewsRight/FeedNewsRight";
import Feed from "../../components/Feed/Feed";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
// import { Users } from "../../data/dummyUsers";
// items below will be comming from Database - just filler for now...
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";
import CoverImg from "../../assets/images/cover-image/building-1.jpg";
import PostImg from "../../assets/images/post-images/post-1.jpg";
import { GET_ALL_POSTS, POST_CREATE } from "../../api/endpoints";
import { v4 as uuid4 } from "uuid";
import axios from "axios";

export default function CommunityFeed() {
  return (
    <section className="community-feed">
      <div className="community-feed__layer">
        {/* left */}
        <FeedProfileLeft
        // ProfileImg={ProfileImg}
        // CoverImg={CoverImg}
        // Users={Users} // using dummy data for side profile recents friends implement dynamicly if time
        />
        {/* center */}
        <Feed
        // username="clem-onojeghuo"
        // ProfileImg={ProfileImg}
        // PostImg={PostImg}
        // posts={posts}
        // handlePostSubmit={handlePostSubmit}
        />
        {/* )} */}
        {/* right */}
        <FeedNewsRight />
      </div>
    </section>
  );
}
