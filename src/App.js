import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";
import { entries } from "./data";

class App extends Component {
  state = {
    entries: [],
    selectedCourse: "VectorFab"
  };

  selectCourse = courseName => {
    console.log(`Course toggled to: ${courseName.toLowerCase()}`);
    this.setState({
      selectedCourse: `${courseName.toLowerCase()}`
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
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
`;
