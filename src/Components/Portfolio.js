import React from 'react';
import PortfolioItem from './PortfolioItem';
import { directive } from '@babel/types';

const Portfolio = ({ projects }) => {
  return (
    <div className="container mb-5" id="portfolio">
      <h1 className="display-4 mb-5">Portfolio</h1>
      <div className="row no-gutter">
        {projects.map(project => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
