import React from "react";
import "./Feed.scss";
import FeedShare from "../FeedShare/FeedShare";
import FeedPost from "../FeedPost/FeedPost";
import { useState, useEffect } from "react";
import {
  GET_TIMELINE_POSTS,
  GET_USER_TIMELINE_POSTS,
} from "../../api/endpoints";
import axios from "axios";
import { sortByTimestamp } from "../../utilities/helper";
import { v4 as uuid4 } from "uuid";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  // getting data from Posts Model in database
  const getTimelinePosts = async () => {
    const response = username
      ? await axios.get(GET_USER_TIMELINE_POSTS(username))
      : await axios.get(GET_TIMELINE_POSTS("62474139601d0de468c2eeac")); // Clem Onojeghuo id
    setPosts(response.data);
  };

  useEffect(() => {
    getTimelinePosts();
  }, [username]);

  return (
    <section className="feed">
      {/* ProfileImg={ProfileImg} handlePostSubmit={handlePostSubmit} */}
      <FeedShare />
      {posts.sort(sortByTimestamp).map((post) => {
        return <FeedPost key={uuid4()} post={post} />;
      })}
    </section>
  );
}
