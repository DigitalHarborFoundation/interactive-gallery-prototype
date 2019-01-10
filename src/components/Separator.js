import React from "react";
import styled from "styled-components";

const Separator = props => (
  <React.Fragment>
    <SeparatorWrapper
      color={props.color}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
    >
      {" "}
      𐄁{" "}
    </SeparatorWrapper>
  </React.Fragment>
);

export default Separator;

const SeparatorWrapper = styled.span`
  color: ${props => (props.color ? props.color : "blue")};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
`;
