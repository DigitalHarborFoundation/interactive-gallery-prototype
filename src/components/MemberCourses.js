import React from "react";
import styled from "styled-components";
import csCoreImg from "./mb-cscore-img.jpg";
import fabCoreImg from "./mb-fabcore-img.jpg";
import indStudyImg from "./mb-indstudy-img.jpg";

const MemberCourses = () => (
  <ContentWrapper>
    <SectionTitle>Spring 2019 Member Courses</SectionTitle>
    <MainGrid>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage
            src={csCoreImg}
            alt="Youth engaged on project with an instructor"
          />
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
        <GhostButtonLink
          href="https://www.digitalharbor.org/event/cs-core-mondays-wednesdays-members/"
          target="_blank"
          rel="noopener"
        >
          Enroll Now
        </GhostButtonLink>
      </CardWrapper>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage
            src={fabCoreImg}
            alt="Youth sitting at a table, focused and working on a project "
          />
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
        <GhostButtonLink
          href="https://www.digitalharbor.org/event/fab-core-tuesdays-thursdays-members/"
          target="_blank"
          rel="noopener"
        >
          Enroll Now
        </GhostButtonLink>
      </CardWrapper>
      <CardWrapper>
        <ProjectImageContainer>
          <ProjectImage src={indStudyImg} />
        </ProjectImageContainer>
        <CourseTitle>Independent Study</CourseTitle>
        <CourseDescription>
          Independent Study is an opportunity for High School Members who wish
          to work on a project that furthers their knowledge in a particular
          skill area or helps them develop skills outside of those offered in
          current DHF courses.
          <br />
          <br />
          This is also a great way for Members who have a schedule that doesn’t
          easily fit with the schedule of courses we typically offer to still be
          involved at DHF. It is not paid work.
          <br />
          <br />
          <strong>This course is ONLY open to High School aged Members.</strong>
        </CourseDescription>
        <GhostButtonLink
          href="https://www.digitalharbor.org/event/cs-core-mondays-wednesdays-members/"
          target="_blank"
          rel="noopener"
        >
          Enroll Now
        </GhostButtonLink>
      </CardWrapper>
    </MainGrid>
  </ContentWrapper>
);

export default MemberCourses;

const ContentWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  margin-bottom: 0;
`;

const SectionTitle = styled.h2`
  color: #000;
  font-size: 4rem;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 0;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4vw;
  grid-row-gap: 4vh;
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

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const GhostButtonLink = styled.a`
  width: 80%;
  max-width: 80%;
  border: 2px solid #0091c9;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0);
  color: #0091c9;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  padding: 2.4rem 2.4rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  text-align: center;
  transition: all ease 0.5s;

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
    max-width: 60%;
  }
`;
