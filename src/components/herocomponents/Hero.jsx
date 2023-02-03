import React from "react";
import imagehero from "../../assets/hero.png";
import "./hero.css";
function Hero() {
  return (
    <div className="portfolio_hero-sec flex-center section-width">
      <div className="portfolio__hero-text">
        <div className="portfolio-line"></div>
        <h2>I'm Raymond</h2>
        <p>Am a freelance frontend web developer</p>
        <button className="portifolio-btn btn">Contact me</button>
      </div>
      <div className="portifolio-img_section">
        <div className="portfolio-circle"></div>
        <img src={imagehero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
