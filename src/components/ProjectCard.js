import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    return <CardWrapper />;
  }
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2vh 2vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default ProjectCard;
