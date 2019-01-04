import React from "react";
import styled from "styled-components";
import heroImg from "../hero-img.jpg";

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <DHFTitle>Digital Harbor Foundation</DHFTitle>
    </LogoWrapper>
    <CTAContainer>
      <ProjectTitle>Interactive Project Gallery</ProjectTitle>
      <ButtonContainer>
        <GhostButton>VectorFab</GhostButton>
        <GhostButton>Game Workshop</GhostButton>
      </ButtonContainer>
    </CTAContainer>
  </HeaderWrapper>
);
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 145, 201, 0.3), rgba(0, 145, 201, 0.3)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 42, 0.8);
  width: 100%;
`;

const DHFTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 300;
  color: #fafafa;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;

const ProjectTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
  color: #fafafa;
  margin-bottom: 10vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;

const GhostButton = styled.button`
  width: 24rem;
  border: 1px solid #fafafa;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0);
  color: #fafafa;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1.6rem 2.4rem;
  text-align: center;

  &:first-child {
    margin-right: 2.4rem;
  }

  &:last-child {
    margin-left: 2.4rem;
  }
`;
