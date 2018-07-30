import React, { Component } from 'react';
import NavLink from '../NavLink'
import './Navbar.css';

class App extends Component {
  render() {
    const styles = {
      navbarStyle: {
        backgroundColor: "#0C5161"
      }
    };
    return (
      <nav className="navbar navbar-expand fixed-top navbar-dark" style={styles.navbarStyle}>

        <div className="container-fluid mx-auto">

          <ul className="navbar-nav d-flex">

            <NavLink route="/" label="Home">
              <i className="fas fa-home fa-3x"></i>
            </NavLink>

            <NavLink label="Portfolio" route="/portfolio" >
              <i className="fas fa-suitcase fa-3x"></i>
            </NavLink>

            <NavLink label="Contact Me" route="/contact">
              <i className="fas fa-phone fa-3x"></i>
            </NavLink>

          </ul>

        </div>
      </nav>
    );
  }
}

export default App;