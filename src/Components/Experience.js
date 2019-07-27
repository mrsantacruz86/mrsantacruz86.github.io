import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="container">
      <h1 className="experience display-4 mt-5">Experience</h1>
      <div>
        {experience.map((job, index) => (
          <div className="job-item" key={index}>
            <h4 className="title">
              <div className="checkpoint colored" />
              {job.title}
            </h4>
            <div className="details">
              <div className="d-flex justify-content-between">
                <h6 className="company">{job.company.toUpperCase()}</h6>
                <div className="dates">{`${job.start} - ${job.end}`}</div>
              </div>
              <div className="description">{job.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
