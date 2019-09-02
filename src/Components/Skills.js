import React, { useState } from 'react';

const Skill = ({ image, skillId, onClickSkill, active }) => {
  return (
    <div id={skillId} onClick={onClickSkill} className="square-medium img-fluid">
      {!active ? (
        <img src={image.icon} className="vector p-4" alt={image.name} />
      ) : (
        <div className="skill-label-card">
          <div className="skill-label">
            <div className="skill-title">
              <h5>{image.name}</h5>
              <h6>{image.type}</h6>
              {/* <h6>{image.score}%</h6> */}
              <div className="progress" style={{ height: '1rem' }}>
                <div
                  className="progress-bar"
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

const Skills = ({ skills }) => {
  const [active, setActive] = useState(null);

  const onClickSkill = id => {
    if (!active || active !== id) {
      return setActive(id);
    }
    if (active === id) {
      return setActive(null);
    }
  };

  return (
    <div className="container">
      <h1 id="tech" className="display-4">
        Technologies
      </h1>
      <div>
        <div className="thumbnail-list d-flex flex-wrap">
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

export default Skills;
