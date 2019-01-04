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
        <YouthName>Jonathan</YouthName>
        <ProjectSemester>Fall 2018</ProjectSemester>
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
  padding: 2vh 2vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const ProjectImageContainer = styled.div`
  margin-bottom: 4rem;
`;

const ProjectImage = styled.img``;

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
