import React from "react";
import "./Feed.scss";
import FeedShare from "../FeedShare/FeedShare";
import FeedPost from "../FeedPost/FeedPost";
import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { GET_ALL_USERS } from "../../api/endpoints";
import { sortByTimestamp } from "../../utilities/helper";
import axios from "axios";

export default function Feed({ ProfileImg, posts, handlePostSubmit }) {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get(GET_ALL_USERS);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="feed">
      <FeedShare ProfileImg={ProfileImg} handlePostSubmit={handlePostSubmit} />
      {posts.sort(sortByTimestamp).map((post, i) => {
        console.log(users[i]);
        return <FeedPost key={uuid4()} post={post} users={users} />;
      })}
    </section>
  );
}
