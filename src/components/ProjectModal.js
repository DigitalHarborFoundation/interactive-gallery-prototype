import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";

class ProjectModal extends Component {
  render() {
    return (
      <Portal>
        <ModalWrapper>
          <ModalCardWrapper>
            <ModalProjectImageContainer>
              {this.props.imgSource === "" ||
              this.props.imgSource === " " ||
              this.props.imgSource === null ||
              this.props.imgSource === undefined ? (
                <ModalProjectImage
                  src="/images/tester-card.jpg"
                  alt="French Press Coffee Maker"
                />
              ) : (
                <ModalProjectImage
                  src={this.props.imgSource}
                  alt={this.props.imgSource}
                />
              )}
            </ModalProjectImageContainer>
            <ModalProjectInfoContainer>
              <YouthName>{this.props.youthName}</YouthName>
              <ProjectSemester>{this.props.projectSemester}</ProjectSemester>
            </ModalProjectInfoContainer>
          </ModalCardWrapper>
        </ModalWrapper>
      </Portal>
    );
  }
}

export default ProjectModal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40vh;
  left: 10vw;
  width: 75%;
  height: 60%;
  background: papayawhip;
`;

const ModalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const ModalProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ModalProjectImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const ModalProjectInfoContainer = styled.div`
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
