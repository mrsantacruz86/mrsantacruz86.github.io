import React from "react";

const renderSkill = (image, index) => {
  return (
    // <div key={index} className="col-3-md col-6-sm col-12-xs ">
    <div className="square-medium">
      <img src={image.icon} className="vector p-4" />
    </div>
    // </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <div>
      <h2>TECHNICAL SKILLS</h2>
      <div className="row">
        <div className="thumbnail-list text-center">
          {skills.map((skill, index) => {
            return renderSkill(skill, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
