import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";

class App extends Component {
  state = {
    course: ""
  };

  toggleCourse = (e, courseName) => {
    e.preventDefault();
    this.setState({
      course: courseName
    });
  };

  componentDidMount() {
    this.state.course === ""
      ? console.log("No course loaded yet")
      : console.log(`Current course: ${this.state.course}`);
  }

  render() {
    return (
      <AppWrapper>
        <Header />
        <ProjectCardGrid courseToggle={this.toggleCourse} />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
`;
