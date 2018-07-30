import React, { Component } from 'react';
import './NavLink.css';

class NavLink extends Component {
  render() {
    let path = window.location.pathname;
    return (
      <li className={path === this.props.route ? "nav-item active" : "nav-item"}>
        <a
          className="nav-link"
          href={this.props.route}
          data-toggle="tooltip" 
          data-placement="bottom" 
          title={this.props.label}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavLink;
