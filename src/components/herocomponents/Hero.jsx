import React from "react";
import { icons } from "../../constant/data";

import "./hero.css";
function Hero() {
  return (
    <div className="section-width ">
      <div className="portfolio__hero-text slide-in-left ">
        <div className="portfolio-line"></div>
        <h2 className="text-shadow-pop-bottom">
          Hello <br />
          My name is Raymond
        </h2>
        <h2>1'm a</h2>
        <p className="text-shadow-pop-bottom">
          Front-end <br /> software <br /> developer
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
