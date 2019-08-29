import React from 'react';

const PortfolioItem = props => {
  const { id, projectName, github, website, description } = props.project;
  return (
    <div className="col-6">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img project-thumbnail"
              src={`assets/screenshots/img${id}.png`}
              alt="Project Screenshot"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{projectName}</h5>
              <p className="class-text">{description}</p>

              <p className="class-text">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> GitHub
                </a>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe-americas" /> Demo
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
