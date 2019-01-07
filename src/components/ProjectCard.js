import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import testerCardOne from "../tester-card.jpg";
import testerCardTwo from "../tester-typewriter-card.jpg";

class ProjectCard extends Component {
  render() {
    return (
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage src={testerCardOne} alt={testerCardOne} />
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
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
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
