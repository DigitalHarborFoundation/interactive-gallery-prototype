import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>
      <FooterRights>© 2019</FooterRights>
      <FooterLinkContainer>
        <FooterLink
          href="https://digitalharbor.org"
          target="_blank"
          rel="nofollow"
        >
          Digital Harbor Foundation.
        </FooterLink>
      </FooterLinkContainer>
      <FooterRights>All rights reserved.</FooterRights>
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
  color: #fafafa;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #e96544;
    opacity: 0.75;
    cursor: pointer;
  }
`;

const FooterRights = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  color: #fafafa;
`;

const FooterLinkContainer = styled.div`
  display: inline;
  transition: all ease-in 0.3s;
  padding: 0%;
  /* border-bottom: 2px solid rgba(0, 145, 201, 0.5); */
  border-bottom: 1px dotted #fafafa;
  &:hover {
    border-bottom: 1px dotted #e96544;
  }
`;

const FooterTagline = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
  padding-top: 1rem;
  padding-bottom: 2.4rem;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:first-of-type {
      padding-bottom: 0.5rem;
    }

    span:last-of-type {
      padding-top: 0.5rem;
    }
  }
`;
