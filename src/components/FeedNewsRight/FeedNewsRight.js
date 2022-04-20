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
              Construction Orders Show Fastest Rise in Seven Months - Business
              News Wales
            </p>
            <p className="news-article__date">-Published: Wed, 20 Apr 2022</p>
            <a
              href="https://businessnewswales.com/construction-orders-show-fastest-rise-in-seven-months/"
              target="_blank"
              className="news-article__source"
            >
              -Article Source{" "}
            </a>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Northern Ireland builders call for construction A level -
              Construction Index
            </p>
            <p className="news-article__date">-Published: Tue, 19 Apr 2022</p>
            <a
              href="https://www.theconstructionindex.co.uk/news/view/northern-ireland-builders-call-for-construction-a-level"
              target="_blank"
              className="news-article__source"
            >
              -Article Source
            </a>
          </div>
        </li>
        <li className="news-article__list-item">
          <div className="news-article__icon-container">
            <ArticleIcon />
          </div>
          <div className="news-article__container">
            <p className="news-article__title">
              Homes England reveals 17 upcoming contract opportunities -
              Construction News
            </p>
            <p className="news-article__date">-Published: Tue, 19 Apr 2022</p>
            <a
              href="https://www.constructionnews.co.uk/buildings/homes-england-reveals-17-upcoming-contract-opportunities-19-04-2022/"
              target="_blank"
              className="news-article__source"
            >
              -Article Source
            </a>
          </div>
        </li>
      </ul>
    </article>
  );
}
