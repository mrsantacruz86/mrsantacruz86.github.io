import React, { Component } from 'react';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Home />
        {/* <Portfolio /> */}
        <Resume />
      </div>
    );
  }
}

export default Content;
