import React, { Component } from "react";

class NavLink extends Component {
  render() {
    const {
      id,
      projectName,
      github,
      website,
      description
    } = this.props.project;
    return (
      <div className="portfolio-item col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            src={`assets/screenshots/img${id}.png`}
            alt="Project Screenshot"
          />
          <div className="card-body">
            <h5 className="card-title">{projectName}</h5>
            <p>{description}</p>
            <p>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" /> GitHub
              </a>
              <br />
              <a href={website} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe-americas" /> Demo
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavLink;
