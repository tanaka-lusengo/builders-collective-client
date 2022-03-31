import React from "react";
import "./CommunityFeed.scss";
import FeedProfile from "../../components/FeedProfile/FeedProfile";
import Feed from "../../components/Feed/Feed";
// items below will be comming from Database - just filler for now...
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";
import CoverImg from "../../assets/images/cover-image/building-1.jpg";
import FriendImg from "../../assets/images/profile-pics/carter-yocham.jpg";
import FriendImg2 from "../../assets/images/profile-pics/cesar-rincon.jpg";
import PostImg from "../../assets/images/post-images/post-1.jpg";
import { Posts } from "../../data/dummyPosts";
import { Users } from "../../data/dummyUsers";

export default function CommunityFeed() {
  return (
    <section className="community-feed">
      <div className="community-feed__layer">
        {/* left */}
        <FeedProfile
          ProfileImg={ProfileImg}
          CoverImg={CoverImg}
          Users={Users}
        />
        {/* center */}
        <Feed
          ProfileImg={ProfileImg}
          PostImg={PostImg}
          Posts={Posts}
          Users={Users}
        />
        {/* right */}
      </div>
    </section>
  );
}
