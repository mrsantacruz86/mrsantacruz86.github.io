import React from 'react';

const renderSkill = (image, index) => {
  return (
    <div key={index} className="float-left square-medium bg-light text-center">
      <img src={image.icon} className="vector" />
    </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <div>
      <h2>TECHNICAL SKILLS</h2>
      <div className="align-items-center thumbnail-list">
        {skills.map((skill, index) => {
          return renderSkill(skill, index);
        })}
      </div>
    </div>
  );
};

export default SkillList;
