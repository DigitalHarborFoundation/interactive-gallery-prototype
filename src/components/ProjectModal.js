import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";
import Separator from "./Separator";

class ProjectModal extends Component {
  render() {
    const { toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalImageContainer>
              {this.props.imgSource === "" ||
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
            </ModalImageContainer>
            <ProjectInfoContainer>
              <ProjectMetaContainer>
                <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
                <YouthInfoContainer>
                  <YouthInfoItem>{this.props.youthName}</YouthInfoItem>
                  <Separator
                    color="#5c5f5f"
                    fontSize="2rem"
                    paddingLeft="1rem"
                    paddingRight="1rem"
                  />
                  <YouthInfoItem>{this.props.projectSemester}</YouthInfoItem>
                </YouthInfoContainer>
              </ProjectMetaContainer>
              <MakerStatement>{this.props.makerStatement}</MakerStatement>
            </ProjectInfoContainer>
            {/*<ToggleButton onClick={toggle}>Close</ToggleButton> */}
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

export default ProjectModal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 40vh;
  left: 10vw;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const ModalImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: red;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: auto;
  height: auto;
  display: block;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25);
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 80%;
`;

const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectTitle = styled.h2`
  color: #000;
  font-size: 3.2rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const YouthInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const YouthInfoItem = styled.span`
  color: #5c5f5f;
  font-size: 2rem;
`;

const MakerStatement = styled.p`
  color: #2d2a2a;
  font-size: 2rem;
  line-height: 2.4rem;
  margin: 0 auto;
  padding: 4rem 4rem;
`;

const ToggleButton = styled.button`
  width: 24rem;
  border: 2px solid #2d2a2a;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0);
  color: #2d2a2a;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  padding: 1.6rem 2.4rem;
  text-align: center;
  transition: all ease 0.5s;

  &:hover {
    border: 2px solid #fafafa;
    color: #fafafa;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: 0;
  }
`;

{
  /*



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
*/
}
