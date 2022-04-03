import React from "react";
import "./FeedNewsRight.scss";
import ArticleIcon from "@mui/icons-material/Article";

export default function FeedNewsRight() {
  return (
    <article className="news-article">
      <h3 className="news-article__main-title">Current News</h3>
      <ul className="news-article__list">
        {/* {Users.map((user) => {
      return <RecentConnections key={uuidv4()} user={user} />;
    })} */}
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Construction leads - April 1st - Scottish Construction Now
            </p>
            <p className="news-article__date">-Published: Tue, 30 Jun 2020</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Construction product availability statement - Construction Index
            </p>
            <p className="news-article__date">-Published: Thu, 31 Mar 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Construction product availability statement - Construction Index
            </p>
            <p className="news-article__date">-Published: Thu, 31 Mar 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
      </ul>
    </article>
  );
}
