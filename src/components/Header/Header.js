import React from "react";
import "./Header.scss";
import { Button } from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { AvatarHeader } from "../Avatar/Avatar";
import { PUBLIC_URL } from "../../api/endpoints";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  console.log(user);

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
            <NavLink
              //come back to sort
              to={`/profile/${user.username}`}
              className="header__nav-list-item header__nav-list-item"
            >
              <AvatarHeader
                img={
                  user.profilePicture
                    ? PUBLIC_URL + user.profilePicture
                    : PUBLIC_URL + "default-profile.png"
                }
              />
            </NavLink>
          </ul>
          <div className="header__register-login-container">
            <div className="header__register-container">
              <Link to="/register">
                <Button buttonName="Register" />
              </Link>
            </div>
            <div className="header__login-container">
              <Link to="/login">
                <Button buttonName="Login" />
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
