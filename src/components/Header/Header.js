import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { ButtonHeader } from "../Button/Button";
import ChatIcon from "@mui/icons-material/Chat";
import { AvatarHeader } from "../Avatar/Avatar";
import { PUBLIC_URL } from "../../api/endpoints";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);

  let navLink = "";
  let avatarImg = PUBLIC_URL + "default-profile.png";

  if (user) {
    navLink = `/profile/${user.username}`;
    avatarImg = PUBLIC_URL + user.profilePicture;
  }

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
              <p className="header__icon-badge"></p>
            </NavLink>
            {user && (
              <NavLink
                to={navLink}
                className="header__nav-list-item header__nav-list-item"
              >
                <AvatarHeader img={avatarImg} />
              </NavLink>
            )}
          </ul>
          <div className="header__register-login-container">
            <div className="header__register-container">
              <Link to="/register">
                <ButtonHeader buttonName="Register" />
              </Link>
            </div>
            <div className="header__login-container">
              <Link to="/login">
                <ButtonHeader buttonName="Login" />
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
