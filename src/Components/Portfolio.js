import React from 'react';
import PortfolioItem from './PortfolioItem';
import { directive } from '@babel/types';

const Portfolio = ({ projects }) => {
  return (
    <div className="container">
      <ul className="list-unstyled">
        {projects.map(project => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
