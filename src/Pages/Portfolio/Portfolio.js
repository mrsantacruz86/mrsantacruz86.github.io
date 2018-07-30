import React, { Component } from 'react';
import PortfolioCollection from "../../Components/PorfolioCollection";
import './Portfolio.css';

class App extends Component {
  collection = [
    {
      id: 1,
      rate: 4,
      projectName: "Clicky-Game",
      github: "https://github.com/mrsantacruz86/clicky-react",
      website: "https://mrsantacruz86.github.io/clicky-react/",
      tech: ["React", "ES6", "Bootstrap"],
      description: "Game to test your mind."
    },
    {
      id: 2,
      rate: 4,
      projectName: "Eat-da-Burger",
      github: "https://github.com/mrsantacruz86/burger-app",
      website: "https://my-burger-list-2018.herokuapp.com/",
      tech: ["Node", "Express", "Handlebars", "MySQL", "JQuery","Bootstrap"],
      description: "Burger wishlist"
    }
  ]
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <hr/>
        <PortfolioCollection collection={this.collection}/>
      </div>
    );
  }
}

export default App;
