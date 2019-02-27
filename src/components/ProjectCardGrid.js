import React, { Component } from "react";
import styled from "styled-components";
import { Spring, config } from "react-spring";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

class ProjectCardGrid extends Component {
  render() {
    return (
      <ContentWrapper>
        {this.props.initialLoad === false && (
          <NowBrowsingHeader>
            Now Browsing: {this.props.selectedCourse}
          </NowBrowsingHeader>
        )}
        <Spring
          native
          config={{ tension: 280, friction: 60 }}
          from={{
            opacity: 0,
            transform: "translate3d(200px,100px,0) scale(1.5) rotateX(60deg)"
          }}
          to={{
            opacity: 1,
            transform: "translate3d(0,0,0) scale(1) rotateX(0deg)"
          }}
          key={this.props.selectedCourse}
        >
          {props => (
            <MainGrid style={props}>
              {this.props.entries.map(entry => (
                <ProjectCard
                  key={entry.id}
                  id={entry.id}
                  imgSource={entry.imgSource}
                  enrolledCourse={entry.enrolledCourse}
                  youthName={entry.youthName}
                  projectTitle={entry.projectTitle}
                  projectSemester={entry.projectSemester}
                  projectLink={entry.projectLink}
                  makerStatement={entry.makerStatement}
                />
              ))}
            </MainGrid>
          )}
        </Spring>
      </ContentWrapper>
    );
  }
}

ProjectCardGrid.propTypes = {
  entries: PropTypes.array.isRequired,
  imgSource: PropTypes.string.isRequired,
  selectedCourse: PropTypes.string.isRequired,
  enrolledCourse: PropTypes.string.isRequired,
  youthName: PropTypes.string.isRequired,
  projectSemester: PropTypes.string.isRequired,
  projectLink: PropTypes.string
};

ProjectCardGrid.defaultProps = {
  entries: ["Waiting for data", "Waiting for data"],
  imgSource: "/images/tester-card.jpg",
  selectedCourse: "VectorFab",
  enrolledCourse: "VectorFab",
  youthName: "DHF Youth",
  projectSemester: "Fall 2018"
};

export default ProjectCardGrid;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 10vh auto;
`;

const NowBrowsingHeader = styled.h2`
  font-size: 4rem;
  margin-bottom: 5vh;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 10vh;
  margin-top: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
