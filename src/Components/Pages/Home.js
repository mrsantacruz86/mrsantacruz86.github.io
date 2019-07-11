import React, { Component } from 'react';
import about from '../../bio-data.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: about
    };
  }

  render() {
    return (
      <div className="page-content">
        <h1>ABOUT ME</h1>
        <hr />
        <p>{this.state.about.bio}</p>

        <h1>TECHNICAL SKILLS</h1>
        <hr />
        <ul>
          {this.state.about.skills.map(skill => (
            <li>
              <span className="font-weight-bold">{skill.type}: </span>
              {skill.tech.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
