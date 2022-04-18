import React from "react";
import "./FeedNewsRight.scss";
import ArticleIcon from "@mui/icons-material/Article";

export default function FeedNewsRight() {
  return (
    <article className="news-article">
      <h3 className="news-article__main-title">Current News</h3>
      <ul className="news-article__list">
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Fife construction firm says fuel thefts linked to government's red
              diesel ban - The Courier
            </p>
            <p className="news-article__date">-Published: Mon, 18 Apr 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              The World's 25 Tallest Buildings Currently Under Construction -
              ArchDaily
            </p>
            <p className="news-article__date">-Published: Mon, 18 Apr 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Fife construction firm says fuel thefts linked to government's red
              diesel ban - The Courier
            </p>
            <p className="news-article__date">-Published: Mon, 18 Apr 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Construction boss convicted of manslaughter after worker fell two
              storeys to his death - The Independent
            </p>
            <p className="news-article__date">-Published: Mon, 18 Apr 2022</p>
            <p className="news-article__source">-Article Source</p>
          </div>
        </li>
      </ul>
    </article>
  );
}
