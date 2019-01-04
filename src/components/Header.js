import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <DHFTitle>Digital Harbor Foundation</DHFTitle>
    </LogoWrapper>
    <ProjectTitle>Interactive Project Gallery</ProjectTitle>
    <GhostButton>VectorFab</GhostButton>
    <GhostButton>Game Workshop</GhostButton>
  </HeaderWrapper>
);
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  background: #0091c9;
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

const ProjectTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
  color: #fafafa;
`;

const GhostButton = styled.button`
  border: 3px solid #fafafa;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0);
  color: #fafafa;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1.6rem 2.4rem;
`;
