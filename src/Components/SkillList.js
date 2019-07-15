import React, { useState } from "react";

const Skill = ({ image, skillId }) => {
  return (
    <div id={skillId} className="square-medium img-fluid">
      <img src={image.icon} className="vector p-4" />
    </div>
    // </div>
  );
};

const SkillList = ({ skills }) => {
  const [active, setActive] = useState(null);
  const onClickSkill = id => setActive(id);
  const onBlurSkill = id => setActive(null);
  return (
    <div>
      <h2>TECHNICAL SKILLS</h2>
      <div>
        <div className="thumbnail-list">
          {skills.map((skill, index) => (
            <Skill
              image={skill}
              key={index}
              skillId={index}
              onClickSkill={() => onClickSkill(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
