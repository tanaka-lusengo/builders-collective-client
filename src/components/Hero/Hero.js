import React from "react";
import "./Hero.scss";

export default function Hero({ allJobs }) {
  return (
    <section className="hero">
      <div className="hero__layer">
        <h1 className="hero__text-left">Jobs board</h1>
        <h1 className="hero__text-right">
          Currently, we have... <br />
          <span className="hero__number">{allJobs.length}</span> opportunities
          waiting for you!
        </h1>
      </div>
    </section>
  );
}
