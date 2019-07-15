import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import SideSection from "./Components/SideSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <section>
            <SideSection />
          </section>

          <section>
            <Content />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
