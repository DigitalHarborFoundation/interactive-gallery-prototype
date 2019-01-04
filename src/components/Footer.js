import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>Digital Harbor Foundation 🦄 2019</FooterTagline>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(45, 42, 42, 0.8);
  width: 100%;
`;

const FooterTagline = styled.span`
  font-size: 2rem;
  font-weight: normal;
  padding: 2.4rem 0;
  color: #fafafa;
`;
