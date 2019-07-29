import React from 'react';
import PortfolioItem from './PortfolioItem';
import { directive } from '@babel/types';

const Portfolio = ({ projects }) => {
  return (
    <div className="container">
      <h1 className="display-4">Portfolio</h1>
      <ul className="list-group list-group-flush">
        {projects.map(project => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
