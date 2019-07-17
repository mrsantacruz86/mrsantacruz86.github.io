import React from 'react';

const Experience = props => {
  const { experience } = props;
  return (
    <div>
      <h2 id="experience">Experience</h2>
      <div>
        {experience.map((job, index) => (
          <div className="job-item" key={index}>
            <h4 className="title">
              <div className="checkpoint colored" />
              Software Developer
            </h4>
            <div className="details">
              <div className="d-flex justify-content-between">
                <h6 className="company">HIS HOUSE CHILDREN'S HOME</h6>
                <div className="dates">May 2017 - Present</div>
              </div>
              <div className="description">
                Created web app that keeps audits records and generates reports. The app was a
                secured API using JWT and the UI is built with ReactJS. The app has helped the
                company to reduce paperwork and boost efficiency.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
