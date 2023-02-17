import React from "react";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GiPlayerTime } from "react-icons/gi";
import "./service.css";
function Service() {
  return (
    <div className="service--section section-width">
      <div className="service--header">
        <h1>services</h1>
        <div className="service--header-line"></div>
      </div>
      <div className="service--section-box--container flex-center">
        <div className="service--section-box">
          <FaCode className="service-icon icon" />
          <h2>Web development</h2>
          <div className="service--header-line"></div>
          <p className="p__poppins">
            Using modern web development tools such as html,Css and React to
            create awesome websites,With a user friendly interface design
          </p>
        </div>
        <div className="service--section-box">
          <MdDesignServices className="service-icon icon" />
          <h2>Responsive design</h2>
          <div className="service--header-line"></div>
          <p className="p__poppins">
            The ability to create a modern website that can be accessible on
            laptops, ipads and mobile phones
          </p>
        </div>
        <div className="service--section-box">
          <GiPlayerTime className="service-icon icon" />
          <h2>Fast delivery</h2>
          <div className="service--header-line"></div>
          <p className="p__poppins">
            Get Your own website deployed to the web within a short period of
            time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
