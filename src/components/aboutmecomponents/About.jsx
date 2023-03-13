import React from "react";
import "./about.css";
import imagehero from "../../assets/portfolio_pic.jpeg";
function About() {
  return (
    <div className="flex__wrapper about-me section-width">
      <div className="portifolio-img_section slide-in-left ">
        <div className="portfolio-circle rotate-center"></div>
        <img src={imagehero} alt="" />
      </div>

      <div className="portifolio-text-area">
        <h2>About Me</h2>
        <p className="p__poppins">
          Am a self-thought frontend developer based in Nigeria. I have serious
          passion for building amazing web applications, creating interesting
          user experience and making every element in the web accessible to
          everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
