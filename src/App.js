import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import Presentation from './Components/Presentation';
import AboutMe from './Components/AboutMe';
// import Portfolio from "./Components/Portfolio";
import Skills from './Components/Skills';
import Experience from './Components/Experience';

import data from './bio-data.json';

class App extends Component {
  state = {
    skills: data.skills.filter(skill => skill.show),
    bio: data.bio,
    experience: data.experience,
    networks: data.networks.filter(network => network.show)
  };
  render() {
    // console.log(data.experience);
    return (
      <div className="App bg-dark text-light">
        <section>
          <SideBar />
        </section>

        <section className="content">
          {/* <Portfolio /> */}
          <Presentation {...this.state} />
          <Experience experience={this.state.experience} />
          <AboutMe {...this.state} />
          <Skills skills={this.state.skills} />
        </section>
      </div>
    );
  }
}

export default App;
