import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectCardGrid = props => <MainGrid />;

export default GlossaryCardGrid;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
