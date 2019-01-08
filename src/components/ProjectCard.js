import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    return (
      <CardWrapper>
        <ProjectImageContainer>
          {this.props.imgSource !== "" ||
          this.props.imgSource !== " " ||
          this.props.imgSource !== null ||
          this.props.imgSource !== undefined ? (
            <ProjectImage
              src={this.props.imgSource}
              alt={this.props.imgSource}
            />
          ) : (
            <ProjectImage
              src="/images/tester-card.jpg"
              alt="French Press Coffee Maker"
            />
          )}
        </ProjectImageContainer>
        <ProjectInfoContainer>
          <YouthName>{this.props.youthName}</YouthName>
          <ProjectSemester>{this.props.projectSemester}</ProjectSemester>
        </ProjectInfoContainer>
      </CardWrapper>
    );
  }
}

ProjectCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  youthName: PropTypes.string.isRequired,
  projectSemester: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
  imgSource: "/images/tester-card.jpg",
  youthName: "DHF Youth",
  projectSemester: "Fall 2018"
};

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
