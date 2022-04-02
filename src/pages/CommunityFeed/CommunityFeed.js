import React, { useEffect, useState } from "react";
import "./CommunityFeed.scss";
import FeedProfile from "../../components/FeedProfile/FeedProfile";
import Feed from "../../components/Feed/Feed";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Users } from "../../data/dummyUsers";
// items below will be comming from Database - just filler for now...
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";
import CoverImg from "../../assets/images/cover-image/building-1.jpg";
import PostImg from "../../assets/images/post-images/post-1.jpg";
import { v4 as uuid4 } from "uuid";
import { GET_ALL_POSTS, POST_CREATE, PUBLIC_URL } from "../../api/endpoints";
import axios from "axios";

export default function CommunityFeed() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const response = await axios.get(GET_ALL_POSTS);
    setPosts(response.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  // Form functionality to post
  const newPost = (contentVal) => {
    return {
      userId: uuid4(),
      content: contentVal,
      image: "default-post.jpg",
    };
  };

  // axios promise to share new post
  const postContentCall = (contentVal) => {
    axios.post(POST_CREATE, newPost(contentVal));
  };

  // Form POST comment event handler functionality for home page
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let contentVal = form.content.value;

    try {
      postContentCall(contentVal);
    } catch (e) {
      console.log("handlePostSubmit() error -->", e);
    }
    form.reset();
    getAllPosts();
  };

  // safeguard function for when data has not been fetched from api
  const ringLoaderStyling = css`
    display: block;
    margin: 0 auto;
    border-color: #cc8d81;
  `;

  if (!posts) {
    return (
      <div className="community-feed__loading">
        <ClipLoader css={ringLoaderStyling} size={100} />
      </div>
    );
  }

  return (
    <section className="community-feed">
      <div className="community-feed__layer">
        {/* left */}
        <FeedProfile
          ProfileImg={ProfileImg}
          CoverImg={CoverImg}
          Users={Users} // using dummy data for side profile recents friends implement dynamicly if time
        />
        {/* center */}
        {posts && (
          <Feed
            ProfileImg={ProfileImg}
            PostImg={PostImg}
            posts={posts}
            handlePostSubmit={handlePostSubmit}
          />
        )}
        {/* right */}
      </div>
    </section>
  );
}
