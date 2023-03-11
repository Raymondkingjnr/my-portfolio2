import React from "react";
import { icons } from "../../constant/data";

import "./hero.css";
function Hero() {
  return (
    <div className="section-width ">
      <div className="portfolio__hero-text slide-in-left ">
        <h2>
          Hey There <br />
          My name is Raymond
        </h2>
        <h1>1'm a</h1>
        <p className="">
          Front-end <br /> software <br /> developer.
        </p>
        <button className="portfolio-btn btn heartbeat" id="section--form_sec">
          <a href="#contact">Contact Me</a>
        </button>
        <div className="hero--icons">
          {icons.map((icon, index) => (
            <div className="hero--icon-item" key={index}>
              <a href={icon.link}>{icon.icon}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
