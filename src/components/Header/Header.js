import React from "react";
import "./Header.scss";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import { AvatarHeader } from "../Avatar/Avatar";
import ProfileImg from "../../assets/images/profile-pics/Tanaka.jpg";

export default function Header() {
  return (
    <header className="header">
      <section className="header__layer">
        <div className="header__logo-container">
          <NavLink to="/">
            <h1 className="header__logo">Builders' Collective</h1>
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list-container">
            <NavLink
              to="/view-jobs"
              className={(isActive) =>
                "header__nav-list-item header__nav-list-item" +
                (!isActive ? "" : "--active")
              }
            >
              View Jobs
            </NavLink>
            <NavLink
              to="/community-feed"
              className={(isActive) =>
                "header__nav-list-item header__nav-list-item" +
                (!isActive ? "" : "--active")
              }
            >
              Community Feed
            </NavLink>
            <NavLink
              to="/my-network"
              className={(isActive) =>
                "header__nav-list-item header__nav-list-item-icon header__nav-list-item" +
                (!isActive ? "" : "--active")
              }
            >
              <ChatIcon />
              <span className="header__icon-badge">3</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={(isActive) =>
                "header__nav-list-item header__nav-list-item" +
                (!isActive ? "" : "--active")
              }
            >
              <AvatarHeader img={ProfileImg} />
            </NavLink>
          </ul>
          <div className="header__register-login-container">
            <div className="header__register-container">
              <Button buttonName="Register" />
            </div>
            <div className="header__login-container">
              <Button buttonName="Login" />
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
