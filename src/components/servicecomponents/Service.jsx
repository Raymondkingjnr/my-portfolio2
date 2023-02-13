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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            suscipit impedit, illo dolorem ullam delectus ipsa eos quos
            recusandae tempore.
          </p>
        </div>
        <div className="service--section-box">
          <MdDesignServices className="service-icon icon" />
          <h2>web design</h2>
          <div className="service--header-line"></div>
          <p className="p__poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            suscipit impedit, illo dolorem ullam delectus ipsa eos quos
            recusandae tempore.``
          </p>
        </div>
        <div className="service--section-box">
          <GiPlayerTime className="service-icon icon" />
          <h2>Fast delivery</h2>
          <div className="service--header-line"></div>
          <p className="p__poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            suscipit impedit, illo dolorem ullam delectus ipsa eos quos
            recusandae tempore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
