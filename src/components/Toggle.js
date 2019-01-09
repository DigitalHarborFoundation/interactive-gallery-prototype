import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.on && <h1>Toggle Tester</h1>}
        <ToggleButton onClick={this.toggle}>Click me</ToggleButton>
      </React.Fragment>
    );
  }
}

export default Toggle;

const ToggleButton = styled.button`
  width: 24rem;
  border: 2px solid #2d2a2a;
  border-radius: 15px;

  color: #2d2a2a;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  padding: 1.6rem 2.4rem;
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
`;
