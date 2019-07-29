import React from 'react';

const PortfolioItem = props => {
  const { id, projectName, github, website, description } = props.project;
  return (
    <li className="list-group-item media">
      <img
        className="project-thumbnail mr-3"
        src={`assets/screenshots/img${id}.png`}
        alt="Project Screenshot"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{projectName}</h5>
        <p>{description}</p>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" /> GitHub
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe-americas" /> Demo
          </a>
          <br />
        </p>
      </div>
    </li>
  );
};

export default PortfolioItem;
