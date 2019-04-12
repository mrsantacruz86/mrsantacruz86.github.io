import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Content.css';
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Portfolio from '../../Pages/Portfolio'

class Content extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Content;
