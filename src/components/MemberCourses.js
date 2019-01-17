import React from "react";
import styled from "styled-components";

const MemberCourses = () => (
  <ContentWrapper>
    <SectionTitle>Spring 2019 Member Courses</SectionTitle>
    <MainGrid>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage />
        </ProjectImageContainer>
        <ProjectTitle>CS Core</ProjectTitle>
        <YouthName>
          CS Core is an introduction to the fundamentals of programming. This
          course is focused on building a solid foundation through projects and
          examples of best practices. Youth will learn programming skills
          through modern JavaScript and the p5.js library. There is a focus on
          creating interactive web experiences and core skills that will lead
          into future computer science courses. This course is the first in our
          Computer Science Pathway and is a prerequisite to following courses.
        </YouthName>
      </CardWrapper>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage />
        </ProjectImageContainer>
        <ProjectTitle>Fab Core</ProjectTitle>
        <YouthName>
          CS Core is an introduction to the fundamentals of programming. This
          course is focused on building a solid foundation through projects and
          examples of best practices. Youth will learn programming skills
          through modern JavaScript and the p5.js library. There is a focus on
          creating interactive web experiences and core skills that will lead
          into future computer science courses. This course is the first in our
          Computer Science Pathway and is a prerequisite to following courses.
        </YouthName>
      </CardWrapper>
    </MainGrid>
  </ContentWrapper>
);

export default MemberCourses;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 10vh auto;
`;

const SectionTitle = styled.h2`
  color: #000;
  font-size: 4rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 10vh;
  margin-top: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
      rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transform: translate3D(0, -1px, 0) scale(1.04);
    cursor: pointer;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
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

const ProjectTitle = styled.h3`
  color: #000;
  font-size: 3.2rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;
