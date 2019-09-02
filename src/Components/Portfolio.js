import React from 'react';
import PortfolioItem from './PortfolioItem';
import { directive } from '@babel/types';

const Portfolio = ({ projects }) => {
  return (
    <div className="container" id="portfolio">
      <h1 className="display-4 my-4">Portfolio</h1>
      {/* <h5 className="mb-4">Some of my work here...</h5> */}
      <div className="row no-gutter">
        {projects.map(project => (
          <PortfolioItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
