import React, { Component } from 'react';
import NavLink from '../NavLink'
import './Navbar.css';

class App extends Component {
  render() {
    // const styles = {
    //   navbarStyle: {
    //     backgroundColor: "#0C5161"
    //   }
    // };
    return (
        <nav className="icon-bar fixed-top">

          <NavLink route="/" label="Home">
            <i className="fas fa-home fa-2x"></i>
          </NavLink>

          <NavLink label="Portfolio" route="/portfolio" >
            <i className="fas fa-suitcase fa-2x"></i>
          </NavLink>

          <NavLink label="Contact Me" route="/contact">
            <i className="fas fa-phone fa-2x"></i>
          </NavLink>

        </nav>
    );
  }
}

export default App;