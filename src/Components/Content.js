import React, { Component } from "react";
import Home from "./Pages/Home";
// import Portfolio from './Pages/Portfolio';
import SkillList from "../Components/SkillList";
import data from "../bio-data.json";

import Resume from "./Pages/Resume";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Home />
        {/* <Portfolio /> */}
        <Resume />
        <SkillList skills={data.skills} />
        <Home />
      </div>
    );
  }
}

export default Content;
