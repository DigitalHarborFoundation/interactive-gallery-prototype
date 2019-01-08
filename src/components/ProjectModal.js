import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";

class ProjectModal extends Component {
  render() {
    return (
      <Portal>
        <ModalWrapper>
          <CardWrapper>
            <ProjectImageContainer>
              {this.props.entries.imgSource === "" ||
              this.props.imgSource === " " ||
              this.props.imgSource === null ||
              this.props.imgSource === undefined ? (
                <ProjectImage
                  src="/images/tester-card.jpg"
                  alt="French Press Coffee Maker"
                />
              ) : (
                <ProjectImage
                  src={this.props.imgSource}
                  alt={this.props.imgSource}
                />
              )}
            </ProjectImageContainer>
            <ProjectInfoContainer>
              <CourseName>VectorFab</CourseName>
              <ProjectTitle>My French Press</ProjectTitle>
              <YouthInformation>
                <YouthName>Jonathan</YouthName> 𐄁{" "}
                <ProjectSemester>Fall 2018</ProjectSemester>
              </YouthInformation>
              <MakerStatement>
                A Organic latte, sugar grounds, medium extra con panna as
                turkish. Coffee id flavour mazagran cortado foam, aroma caffeine
                brewed caramelization froth americano. Mocha, pumpkin spice,
                half and half, redeye coffee caffeine in caffeine
                froth.prototype is a first model or version of something
              </MakerStatement>
            </ProjectInfoContainer>
          </CardWrapper>
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 80%;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const YouthInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  width: 80%;
`;

const ProjectTitle = styled.h2`
  color: #000;
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
`;

const YouthName = styled.p`
  color: #5c5f5f;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

const ProjectSemester = styled.p`
  color: #5c5f5f;
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

const MakerStatement = styled.p`
  color: #2d2a2a;
  font-size: 2rem;
  margin: 0 auto;
`;

const CourseName = styled.p``;
