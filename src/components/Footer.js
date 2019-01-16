import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>
      <FooterLinkContainer>
        <FooterLink
          href="https://digitalharbor.org"
          target="_blank"
          rel="nofollow"
        >
          Digital Harbor Foundation
        </FooterLink>{" "}
      </FooterLinkContainer>
      <span role="img" aria-label="Unicorn">
        🦄
      </span>{" "}
      2019
    </FooterTagline>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-shrink: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 42, 0.8);
  width: 100%;
`;

const FooterLink = styled.a`
  color: #0091c9;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #fafafa;
    opacity: 0.75;
    cursor: pointer;
  }
`;

const FooterLinkContainer = styled.div`
  display: inline;
  transition: all ease-in 0.3s;
  padding: 0%;
  border-bottom: 2px solid rgba(0, 145, 201, 0.5);
  &:hover {
    background: rgba(0, 145, 201, 0.5);
    border-bottom: none;
  }
`;

const FooterTagline = styled.span`
  font-size: 2rem;
  font-weight: normal;
  padding: 2.4rem 0;
  color: #fafafa;
`;
