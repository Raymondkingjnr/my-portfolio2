import React from "react";
import { SkillSet } from "../../constant/data";
import "./skill.css";
function Skill() {
  return (
    <div className="skill--container section-width">
      <div className="skill--container_header">
        <h1>Skillset</h1>
        <div className="skill--container_line"></div>
      </div>
      <div className="skill--container_items">
        {SkillSet.map((item, index) => {
          const { text, icon, id } = item;
          return (
            <div className="skill--container_item" key={id}>
              <div className="skill-icons icons">{icon}</div>
              <p className="p__poppins">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
