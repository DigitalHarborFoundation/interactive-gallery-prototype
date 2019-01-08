import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";

class ProjectModal extends Component {
  render() {
    return (
      <Portal>
        <ModalWrapper>{this.props.children}</ModalWrapper>
      </Portal>
    );
  }
}

export default ProjectModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: papayawhip;
`;
