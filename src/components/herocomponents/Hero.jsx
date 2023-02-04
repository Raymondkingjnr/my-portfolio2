import React from "react";
import imagehero from "../../assets/hero.png";
import "./hero.css";
function Hero() {
  return (
    <div className="portfolio_hero-sec flex-center section-width">
      <div className="portfolio__hero-text">
        <div className="portfolio-line"></div>
        <h2>Hello,</h2>
        <h2>I'm Raymond</h2>
        <p>
          I'm a Frontend developer based in Nigeria, specializing in building
          exceptional websites, applications, and making the web accessible to
          everyone.
        </p>
        <button className="portfolio-btn btn">Contact me</button>
      </div>
      <div className="portifolio-img_section">
        <div className="portfolio-circle"></div>
        <img src={imagehero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
