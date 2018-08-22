import React, { Component } from 'react';
import './Home.css';
import about from '../../bio-data.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: about
    }
  }

  render() {

    return (
      <div className="page-content">
        <h2>ABOUT ME</h2>
        <hr />
        <p>{this.state.about.bio}</p>

        <h2>TECHNICAL SKILLS</h2>
        <hr/>
        <ul>
          {
            this.state.about.skills.map(skill => (
              <li >
                <span className="font-weight-bold">{skill.type}: </span>
                {skill.tech.join(", ")}
              </li>

            ))
          }
        </ul>

      </div>
    );
  }
}

export default Home;
