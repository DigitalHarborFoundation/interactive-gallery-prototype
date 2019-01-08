import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";
import Portal from "./components/Portal";
import { entries } from "./data";

class App extends Component {
  state = {
    entries: [],
    selectedCourse: "VectorFab"
  };

  selectCourse = courseName => {
    console.log(`Course toggled to: ${courseName.toLowerCase()}`);
    let filteredEntries = entries.filter(
      entry => entry.enrolledCourse.toLowerCase() === courseName.toLowerCase()
    );
    console.log(`filtering content for: ${courseName}`);
    console.log(filteredEntries);
    this.setState({
      selectedCourse: `${courseName.toLowerCase()}`,
      entries: filteredEntries
    });
  };

  render() {
    return (
      <AppWrapper>
        <Header selectCourse={this.selectCourse.bind(this)} />
        <ProjectCardGrid
          entries={this.state.entries}
          selectedCourse={this.state.selectedCourse}
        />
        <Portal>
          <h2>Testing Portal</h2>
        </Portal>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
`;
