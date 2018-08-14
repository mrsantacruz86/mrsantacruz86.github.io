import React, { Component } from 'react';
import './NavLink.css';

class NavLink extends Component {
  render() {
    let path = window.location.pathname;
    return (
      <a
        className={path === this.props.route ? "active":"inactive"}
        href={this.props.route}
        data-toggle="tooltip"
        data-placement="bottom"
        title={this.props.label}
      >
        {this.props.children}
      </a>
    );
  }
}

export default NavLink;
