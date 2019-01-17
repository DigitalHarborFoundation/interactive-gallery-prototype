import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Transition, config } from "react-spring";
import FooterDHF from "./components/FooterDHF";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";
import ProjectModal from "./components/ProjectModal";
import Toggle from "./components/Toggle";
import MemberCourses from "./components/MemberCourses";
import { entries } from "./data";
import heroImg from "./hero-img.jpg";

class App extends Component {
  state = {
    entries: [],
    selectedCourse: "",
    hovering: false,
    initialLoad: true
  };

  mouseOver = () => this.setState({ hovering: true });
  mouseOut = () => this.setState({ hovering: false });

  selectCourse = courseName => {
    let filteredEntries = entries.filter(
      entry => entry.enrolledCourse.toLowerCase() === courseName.toLowerCase()
    );
    this.setState({
      initialLoad: false,
      selectedCourse: `${courseName}`,
      entries: filteredEntries
    });
  };

  render() {
    return (
      <AppWrapper>
        <Masthead>
          <LogoWrapper>
            <DHFTitle>Digital Harbor Foundation</DHFTitle>
          </LogoWrapper>

          <CTAContainer>
            <ProjectTitle>Interactive Project Gallery</ProjectTitle>
            <Spring
              config={{ tension: 200, friction: 20, delay: 200 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              reset={this.state.initialLoad}
            >
              {props => (
                <ProjectSubTitle style={props}>
                  Click on a course to load youth projects
                </ProjectSubTitle>
              )}
            </Spring>
            <ButtonContainer>
              <GhostButton
                onClick={this.selectCourse.bind(this, "VectorFab")}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
              >
                VectorFab
              </GhostButton>
              <GhostButton
                onClick={this.selectCourse.bind(this, "Game Workshop")}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
              >
                Game Workshop
              </GhostButton>
            </ButtonContainer>
          </CTAContainer>
        </Masthead>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <ProjectModal
                on={on}
                toggle={toggle}
                entries={this.state.entries}
                selectedCourse={this.state.selectedCourse}
              />
            </React.Fragment>
          )}
        </Toggle>
        <Spring
          config={{ tension: 150, friction: 20, delay: 750 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          reset={this.state.initialLoad}
        >
          {props => this.state.initialLoad && <MemberCourses />}
        </Spring>
        <Transition
          native
          items={this.state.entry}
          from={{ opacity: 0, bgOpacity: 0, height: -80 }}
          enter={{ opacity: 1, bgOpacity: 0.85, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 80 }}
        >
          {item => props => (
            <ProjectCardGrid
              entries={this.state.entries}
              selectedCourse={this.state.selectedCourse}
            />
          )}
        </Transition>
        <FooterDHF />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    max-height: 100vh;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 42, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const DHFTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 300;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }
`;

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 145, 201, 0.3), rgba(0, 145, 201, 0.3)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 16vh; */
  margin-top: 5vh;

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 4rem;
  font-weight: normal;
  color: #fafafa;
  /* margin-bottom: 10vh; */
  margin-bottom: 5vh;

  @media only screen and (max-width: 1000px) {
  }
`;

const ProjectSubTitle = styled.h3`
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 5vh;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 7rem;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const GhostButton = styled.button`
  width: fit-content;
  min-width: 24rem;
  border: 2px solid #fafafa;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0);
  color: #fafafa;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  padding: 1.6rem 2.4rem;
  text-align: center;
  transition: all ease 0.5s;

  &:first-child {
    margin-right: 2.4rem;
  }

  &:last-child {
    margin-left: 2.4rem;
  }

  &:hover {
    border: 2px solid #0091c9;
    color: #0091c9;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;

    &:first-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }

    &:last-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
  }
`;

const CourseDescriptionContainer = styled.div`
  background: rgba(45, 42, 42, 0.8);
  position: relative;
  width: 50%;
  margin: 0 auto;
  transition: all ease-in-out 0.5s;
  transform: translateY(8rem);
`;

const CourseDescription = styled.p`
  color: #fafafa;
  font-size: 2rem;
  line-height: 2.4rem;
  margin: 0 auto;
  padding: 4rem 4rem;
`;
