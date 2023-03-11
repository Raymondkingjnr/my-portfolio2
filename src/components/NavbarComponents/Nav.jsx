import React from "react";
import { DiCssdeck } from "react-icons/di";
import { icons } from "../../constant/data";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav__bar flex-center section-width">
      <div className="nav__bar-logo-sec">
        <DiCssdeck className=" icons" />
        <span className="nav__bar-span">portifolio</span>
      </div>
      <div className="nav__bar-icons">
        {icons.map((item, index) => {
          const { icon, link } = item;
          return (
            <div key={index} className="nav--icons icons">
              <a href={link} className="navbar-icon">
                {icon}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
