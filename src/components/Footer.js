import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>
      <FooterLink
        href="https://digitalharbor.org"
        target="_blank"
        rel="nofollow"
      >
        Digital Harbor Foundation
      </FooterLink>{" "}
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
    cursor: pointer;
  }
`;

const FooterTagline = styled.span`
  font-size: 2rem;
  font-weight: normal;
  padding: 2.4rem 0;
  color: #fafafa;
`;
