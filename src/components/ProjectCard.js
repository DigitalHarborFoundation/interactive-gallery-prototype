import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import testerImg from "../tester-card.jpg";

class ProjectCard extends Component {
  render() {
    return (
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage src={testerImg} alt={testerImg} />
        </ProjectImageContainer>
        <ProjectInfoContainer>
          <YouthName>Jonathan</YouthName>
          <ProjectSemester>Fall 2018</ProjectSemester>
        </ProjectInfoContainer>
      </CardWrapper>
    );
  }
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  /* padding: 2vh 2vw; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  /* transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */
  transition: all 0.5s ease-in-out;

  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transform: translate3D(0, -1px, 0) scale(1.02);
    cursor: pointer;

`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;

const YouthName = styled.p`
  color: #000;
  font-size: 3.2rem;
  margin: 0;
  padding: 0;
`;

const ProjectSemester = styled.p`
  color: #5c5f5f;
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
`;
