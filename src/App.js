import React, { Component } from "react";
import Header from "./components/Header";
import ProjectCardGrid from "./components/ProjectCardGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectCardGrid />
      </div>
    );
  }
}

export default App;
