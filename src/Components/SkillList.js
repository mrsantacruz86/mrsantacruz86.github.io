import React, { useState } from 'react';

const Skill = ({ image, skillId, onClickSkill, active }) => {
  return (
    <div id={skillId} onClick={onClickSkill} className="square-medium img-fluid">
      {!active ? (
        <img src={image.icon} className="vector p-4" />
      ) : (
        <div className="skill-label-card p-4">
          <div className="skill-label">
            <div className="skill-title">
              <h5>{image.name}</h5>
              <h6>{image.type}</h6>
              {/* <h6>{image.score}%</h6> */}
              <div class="progress" style={{ height: '1rem' }}>
                <div
                  class="progress-bar"
                  style={{ width: `${image.score}%` }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {image.score}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillList = ({ skills }) => {
  const [active, setActive] = useState(null);

  const onClickSkill = id => {
    if (!active || active !== id) {
      return setActive(id);
    }
    if (active === id) {
      return setActive(null);
    }
  };
  // const onBlurSkill = id => setActive(null);

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
              active={active === index ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
