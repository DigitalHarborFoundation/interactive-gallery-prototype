import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const SocialLinks = () => (
  <LinkContainer>
    <a
      href="https://www.facebook.com/DigitalHarbor"
      target="_blank"
      rel="nofollow"
    >
      <Icon color="#E96544" type="facebook" />
    </a>

    <a href="https://twitter.com/DHFBaltimore" target="_blank" rel="nofollow">
      <Icon color="#E96544" type="twitter" />
    </a>
    <a
      href="https://www.youtube.com/user/DHFBaltimore"
      target="_blank"
      rel="nofollow"
    >
      <Icon color="#E96544" type="youtube" />
    </a>
    <a
      href="https://www.flickr.com/photos/digitalharbor/"
      target="_blank"
      rel="nofollow"
    >
      <Icon color="#E96544" type="flickr" />
    </a>
    <a
      href="https://www.instagram.com/dhfbaltimore/"
      target="_blank"
      rel="nofollow"
    >
      <Icon color="#E96544" type="instagram" />
    </a>
  </LinkContainer>
);

export default SocialLinks;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    padding: 1rem;
  }
`;
