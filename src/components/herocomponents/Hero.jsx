import React from "react";
import { icons } from "../../constant/data";
import imagehero from "../../assets/hero.png";
import "./hero.css";
function Hero() {
  return (
    <div className="portfolio_hero-sec flex-center section-width ">
      <div className="portfolio__hero-text slide-in-left ">
        <div className="portfolio-line"></div>
        <h2>
          Hello <br /> I'm Raymond
        </h2>
        <p>
          I'm a Frontend developer based in Nigeria, specializing in building
          exceptional websites, applications, and making the web accessible to
          everyone.
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
      <div className="portifolio-img_section slide-in-top ">
        <div className="portfolio-circle"></div>
        <img src={imagehero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
