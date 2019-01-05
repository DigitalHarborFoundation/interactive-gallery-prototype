import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectCardGrid = props => (
  <ContentWrapper>
    <MainGrid>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </MainGrid>
  </ContentWrapper>
);
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
