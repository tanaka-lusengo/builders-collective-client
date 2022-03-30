import React from "react";
import "./Header.scss";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

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
                "header__nav-list-item header__nav-list-item" +
                (!isActive ? "" : "--active")
              }
            >
              My Network
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
