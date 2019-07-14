import React from 'react';

const renderSkill = (image, index) => {
  return (
    <div key={index} className="float-left square-medium bg-gradient-danger text-center">
      <img src={image.icon} className="img-fluid vector align-middle" />
    </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <div>
      <h2>TECHNICAL SKILLS</h2>
      <div className="thumbnail-list">
        {skills.map((skill, index) => {
          return renderSkill(skill, index);
        })}
      </div>
    </div>
  );
};

export default SkillList;
