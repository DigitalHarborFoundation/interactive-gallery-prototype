import React from "react";
import styled from "styled-components";
import csCoreImg from "./mb-cscore-img.jpg";
import fabCoreImg from "./mb-fabcore-img.jpg";

const MemberCourses = () => (
  <ContentWrapper>
    <SectionTitle>Spring 2019 Member Courses</SectionTitle>
    <MainGrid>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage src={csCoreImg} />
        </ProjectImageContainer>
        <CourseTitle>CS Core</CourseTitle>
        <CourseDescription>
          CS Core is an introduction to the fundamentals of programming. This
          course is focused on building a solid foundation through projects and
          examples of best practices.
          <br />
          <br />
          Youth will learn programming skills through modern JavaScript and the
          p5.js library. There is a focus on creating interactive web
          experiences and core skills that will lead into future computer
          science courses.
          <br />
          <br />
          This course is the first in our Computer Science Pathway and is a
          prerequisite to following courses.
        </CourseDescription>
      </CardWrapper>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage src={fabCoreImg} />
        </ProjectImageContainer>
        <CourseTitle>Fab Core</CourseTitle>
        <CourseDescription>
          CS Core is an introduction to the fundamentals of programming. This
          course is focused on building a solid foundation through projects and
          examples of best practices.
          <br />
          <br />
          Youth will learn programming skills through modern JavaScript and the
          p5.js library. There is a focus on creating interactive web
          experiences and core skills that will lead into future computer
          science courses.
          <br />
          <br />
          This course is the first in our Computer Science Pathway and is a
          prerequisite to following courses.
        </CourseDescription>
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
  grid-column-gap: 4vw;
  grid-row-gap: 2vh
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

const CourseTitle = styled.h3`
  color: #000;
  font-size: 3.2rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const CourseDescription = styled.p`
  color: #000;
  font-size: 2.4rem;
  margin: 0 auto;
  padding: 2rem;
`;

const GhostButton = styled.button`
  width: fit-content;
  border: 2px solid #0091c9;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0);
  color: #0091c9;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  padding: 1.6rem 2.4rem;
  text-align: center;
  transition: all ease 0.5s;

  &:first-child {
    margin-right: 2.4rem;
  }

  &:last-child {
    margin-left: 2.4rem;
  }

  &:hover {
    border: 2px solid #0091c9;
    color: #0091c9;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
