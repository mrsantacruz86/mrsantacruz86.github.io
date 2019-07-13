import React from 'react';
import { className } from 'postcss-selector-parser';

const Skill = props => {
  return (
    <div>
      <img src={props.icon} className="responsive-image" />
    </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <div>
      <div>Skill List</div>
      <div>{JSON.stringify(skills[0])}</div>
      {skills.map(skill => {
        // <Skill icon={skill.icon} />;
      })}
    </div>
  );
};

export default SkillList;
