import React, { Component } from 'react';
import PortfolioCollection from "../../Components/PorfolioCollection";
import './Portfolio.css';
import projects from "./../../projects.json";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    }
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <hr />
        <PortfolioCollection collection={this.state.projects} />
      </div>
    );
  }
}

export default Portfolio;
