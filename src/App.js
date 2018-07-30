import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import SideSection from './Components/SideSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">

          <div className="row">

            <aside className="col-md-3">
              <SideSection />
            </aside>

            <section className="col-md-9">
              <Content />
            </section>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
