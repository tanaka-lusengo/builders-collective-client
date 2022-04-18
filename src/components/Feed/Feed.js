import React, { useContext, useState, useEffect } from "react";
import "./Feed.scss";
import FeedShare from "../FeedShare/FeedShare";
import FeedPost from "../FeedPost/FeedPost";
import { sortByTimestamp } from "../../utilities/helper";
import { v4 as uuid4 } from "uuid";
import {
  GET_TIMELINE_POSTS,
  GET_USER_TIMELINE_POSTS,
} from "../../api/endpoints";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  // getting posts from PostModel in database,
  // 'username' to get own posts on Profile page
  // 'user._id' to get user posts and posts of those user is following
  const getTimelinePosts = async () => {
    const response = username
      ? await axios.get(GET_USER_TIMELINE_POSTS(username))
      : await axios.get(GET_TIMELINE_POSTS(user._id));
    setPosts(response.data);
  };

  useEffect(() => {
    getTimelinePosts();
  }, [username, user._id]);

  return (
    <section className="feed">
      {(!username || username === user.username) && (
        <FeedShare getTimelinePosts={getTimelinePosts} />
      )}
      {posts.sort(sortByTimestamp).map((post) => {
        return (
          <FeedPost
            key={uuid4()}
            post={post}
            posts={posts}
            getTimelinePosts={getTimelinePosts}
          />
        );
      })}
    </section>
  );
}
