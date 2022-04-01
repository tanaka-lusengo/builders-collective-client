import React from "react";
import "./Profile.scss";
import { Users } from "../../data/dummyUsers";
import { v4 as uuidv4 } from "uuid";
import FeedRecentFriendList from "../../components/FeedRecentFriendList/FeedRecentFriendList";
import FeedShare from "../../components/FeedShare/FeedShare";
import CoverImg from "../../assets/images/cover-image/building-1.jpg";
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__layer">
        <div className="profile__left">
          <h3 className="profile__bottom-title">My Network</h3>
          {Users.map((user) => {
            return <FeedRecentFriendList key={uuidv4()} user={user} />;
          })}
        </div>
        <div className="profile__right">
          <img className="profile__cover" src={CoverImg} alt="cover image" />
          <img
            className="profile__img"
            src={ProfileImg}
            alt="profile picture"
          />
          <div className="profile__name-job">
            <h1 className="profile__name">Tanaka Lusengo</h1>
            <h3 className="profile__job">Quantity Surveyor</h3>
          </div>
          <div className="profile__info">
            <p>Experience Level: Senior</p>
            <p>Skills: Financial Management</p>
            <p>Location: London</p>
            <p>About:</p>
            <p>My story....</p>
          </div>
          <div className="profile__feed-share">
            <FeedShare ProfileImg={ProfileImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
