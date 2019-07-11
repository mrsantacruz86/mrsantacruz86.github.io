import React, { Component } from 'react';
import NavLink from './NavLink';

class App extends Component {
  render() {
    return (
      <nav className="icon-bar fixed-top">
        <NavLink route="/" label="Home">
          <i className="fas fa-home fa-2x" />
        </NavLink>

        <NavLink label="Portfolio" route="/portfolio">
          <i className="fas fa-suitcase fa-2x" />
        </NavLink>

        <NavLink label="Contact Me" route="/contact">
          <i className="fas fa-phone fa-2x" />
        </NavLink>
      </nav>
    );
  }
}

export default App;
