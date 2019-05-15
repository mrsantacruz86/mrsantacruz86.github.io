import React, { Component } from 'react';
import './Content.css';
import Home from '../../Pages/Home'
import Portfolio from '../../Pages/Portfolio'

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Home />
        <Portfolio />
      </div>
    );
  }
}

export default Content;
