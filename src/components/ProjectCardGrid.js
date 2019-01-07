import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectCardGrid = props => (
  <ContentWrapper>
    <h2>
      Current course is{" "}
      {props.selectedCourse.toLowerCase() === "vectorfab"
        ? "VectorFab"
        : "Game Workshop"}{" "}
    </h2>
    {props.selectedCourse.toLowerCase() === "vectorfab" ? (
      <p>Stuff about vectorfab</p>
    ) : (
      <p>Stuff about game workshop</p>
    )}
    <MainGrid>
      <ProjectCard youthName="Jonathan" projectSemester="Fall 2018" />
      <ProjectCard youthName="Shawn" projectSemester="Fall 2018" />
      <ProjectCard youthName="Steph" projectSemester="Fall 2018" />
      <ProjectCard youthName="Andrew" projectSemester="Fall 2018" />
      <ProjectCard youthName="Darius" projectSemester="Fall 2018" />
      <ProjectCard youthName="Ruby" projectSemester="Fall 2018" />
    </MainGrid>
  </ContentWrapper>
);

ProjectCardGrid.propTypes = {
  selectedCourse: PropTypes.string.isRequired
};

ProjectCardGrid.defaultProps = {
  selectedCourse: "VectorFab"
};

export default ProjectCardGrid;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 10vh auto;
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
