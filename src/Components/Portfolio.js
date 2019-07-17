import React, { Component } from 'react';
import PortfolioCollection from './PortfolioCollection';

const Portfolio = props => {
  return (
    <div>
      <h1 id="portfolio">Portfolio</h1>
      <hr />
      <PortfolioCollection collection={props.projects} />
    </div>
  );
};

export default Portfolio;
