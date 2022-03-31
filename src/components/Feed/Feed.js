import React from "react";
import "./Feed.scss";
import FeedShare from "../FeedShare/FeedShare";
import FeedPost from "../FeedPost/FeedPost";

export default function Feed({ ProfileImg, Posts, Users }) {
  return (
    <section className="feed">
      <FeedShare ProfileImg={ProfileImg} />
      {Posts.map((post) => {
        return <FeedPost key={post.id} post={post} users={Users} />;
      })}
    </section>
  );
}
