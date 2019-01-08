import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { entries } from "../data";

const ProjectCardGrid = props => (
  <ContentWrapper>
    <h2>This is for testing purposes:</h2>
    {entries[0].youthName}
    <h3>
      Current course is{" "}
      {props.selectedCourse.toLowerCase() === "vectorfab"
        ? "VectorFab"
        : "Game Workshop"}{" "}
    </h3>
    {props.selectedCourse.toLowerCase() === "vectorfab" ? (
      <p>Stuff about vectorfab</p>
    ) : (
      <p>Stuff about game workshop</p>
    )}
    <MainGrid>
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="TEST"
        projectSemester="Fall 2018"
        imgSource="https://dczvtk204qxa5.cloudfront.net/wp-content/uploads/2016/03/dhf_youth.jpg"
      />
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="Shawn"
        projectSemester="Fall 2018"
      />
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="Steph"
        projectSemester="Fall 2018"
      />
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="Andrew"
        projectSemester="Fall 2018"
      />
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="Darius"
        projectSemester="Fall 2018"
      />
      <ProjectCard
        enrolledCourse="VectorFab"
        youthName="Ruby"
        projectSemester="Fall 2018"
      />
    </MainGrid>
  </ContentWrapper>
);

ProjectCardGrid.propTypes = {
  selectedCourse: PropTypes.string.isRequired,
  enrolledCourse: PropTypes.string.isRequired,
  youthName: PropTypes.string.isRequired,
  projectSemester: PropTypes.string.isRequired
};

ProjectCardGrid.defaultProps = {
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
