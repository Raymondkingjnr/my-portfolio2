import React from "react";
import { projects } from "../../constant/data";
import "./projects.css";
function Projects() {
  return (
    <div className="projects--section section-width">
      <div className="projects--section_header">
        <h1>My Projects</h1>
        <div className="projects--section_line"></div>
      </div>

      <div className="projects--section__items">
        {projects.map((item, index) => {
          const { id, img, code, site, tag } = item;
          return (
            <div className="projects--item" key={id}>
              <div className="project--img">
                <img src={img} alt="img" />
                <div className="overlay"></div>
              </div>
              <div className="project--item_notes">
                <p className="p__poppins project--tag">[ {tag} ]</p>
                <div className="project--item_btn">
                  <button className="project--btn">
                    <a href={code}>code</a>
                  </button>
                  <button className="project--btn">
                    <a href={site}>site</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
