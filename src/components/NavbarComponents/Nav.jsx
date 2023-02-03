import React from "react";
import { DiCssdeck } from "react-icons/di";
import { icons } from "../../constant/data";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav__bar flex-center">
      <div className="nav__bar-logo-sec">
        <DiCssdeck className=" icons" />
        <span className="nav__bar-span">portifolio</span>
      </div>
      <div className="nav__bar-icons icons">
        {icons.map((item, index) => {
          const { icon, link } = item;
          return (
            <div key={index}>
              <a href={link}>{icon}</a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
