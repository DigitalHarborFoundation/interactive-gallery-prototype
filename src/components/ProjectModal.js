import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Transition, animated } from "react-spring";
import Portal from "./Portal";
import Separator from "./Separator";
import Icon from "./Icon";

class ProjectModal extends Component {
  render() {
    const { toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          items={on}
          unique
          reset
          from={{ opacity: 0, bgOpacity: 0, y: -80 }}
          enter={{ opacity: 1, bgOpacity: 0.85, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: -80 }}
          trail={500}
        >
          {on =>
            on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0,${y}px,0)`
                    ),
                    ...styles
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon color="#E96544" type="close" />
                  </CloseButton>

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
                        alt={this.props.projectTitle}
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
                        <YouthInfoItem>
                          {this.props.projectSemester}
                        </YouthInfoItem>
                      </YouthInfoContainer>
                    </ProjectMetaContainer>
                    <MakerStatement>{this.props.makerStatement}</MakerStatement>
                    {this.props.projectLink && (
                      <ProjectLinkContainer>
                        <ProjectLinkInfo>Link to my project:</ProjectLinkInfo>{" "}
                        <ProjectLink href={this.props.projectLink}>
                          {this.props.projectTitle}
                        </ProjectLink>
                      </ProjectLinkContainer>
                    )}
                  </ProjectInfoContainer>
                </ModalCard>
                <ModalBackground
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    ),
                    trail: 1000,
                    unique: true,
                    reset: true
                  }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

ProjectModal.propTypes = {
  entries: PropTypes.array.isRequired,
  imgSource: PropTypes.string.isRequired,
  selectedCourse: PropTypes.string.isRequired,
  enrolledCourse: PropTypes.string.isRequired,
  youthName: PropTypes.string.isRequired,
  projectSemester: PropTypes.string.isRequired,
  projectLink: PropTypes.string
};

ProjectModal.defaultProps = {
  entries: ["Waiting for data", "Waiting for data"],
  imgSource: "/images/tester-card.jpg",
  selectedCourse: "VectorFab",
  enrolledCourse: "VectorFab",
  youthName: "DHF Youth",
  projectSemester: "Fall 2018"
};

export default ProjectModal;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.85); */
  background: #000000;
`;

const ModalCard = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* height: auto; */
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 10;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ModalImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: block;
  object-fit: fill;
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

const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProjectLinkInfo = styled.p`
  color: #5c5f5f;
  font-size: 2rem;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 2rem;
  padding-right: 1rem;
`;

const ProjectLink = styled.a`
  color: #0091c9;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 0 auto;
  padding-bottom: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  transition: all ease 0.5s;
  background: transparent;
  padding: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
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
