import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Content.css';
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Portfolio from '../../Pages/Portfolio'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </Router>
    );
  }
}

export default App;
