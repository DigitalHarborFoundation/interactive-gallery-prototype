import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";

class App extends Component {
  state = {
    selectedCourse: "VectorFab"
  };

  toggleCourse = courseName => {
    console.log(`Course toggled to: ${courseName}`);
  };

  componentDidMount() {
    this.state.selectedCourse === ""
      ? console.log("No course loaded yet")
      : console.log(`Current course: ${this.state.selectedCourse}`);
  }

  render() {
    return (
      <AppWrapper>
        <Header toggleCourse={this.toggleCourse.bind(this)} />
        <ProjectCardGrid selectedCourse={this.state.selectedCourse} />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
`;
