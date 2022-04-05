import React from "react";
import "./CommunityFeed.scss";
import FeedProfileLeft from "../../components/FeedProfileLeft/FeedProfileLeft";
import FeedNewsRight from "../../components/FeedNewsRight/FeedNewsRight";
import Feed from "../../components/Feed/Feed";

export default function CommunityFeed() {
  return (
    <section className="community-feed">
      <div className="community-feed__layer">
        <FeedProfileLeft />
        <Feed />
        <FeedNewsRight />
      </div>
    </section>
  );
}
