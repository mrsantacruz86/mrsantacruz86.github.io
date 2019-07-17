import React, { Component } from "react";
import SideBar from "./Components/SideBar";
import Presentation from "./Components/Presentation";

import Home from "./Components/AboutMe";
// import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

import data from "./bio-data.json";

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
      <div className="App">
        <SideBar />
        <div className="container">
          <section>
            <Presentation {...this.state} />
          </section>

          <section>
            <div className="content">
              <Home bio={this.state.bio} />
              {/* <Portfolio /> */}
              <Experience experience={this.state.experience} />
              <Skills skills={this.state.skills} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
