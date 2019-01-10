import React from "react";
import styled from "styled-components";

const Separator = props => (
  <React.Fragment>
    <SeparatorWrapper color={props.color}> 𐄁 </SeparatorWrapper>
  </React.Fragment>
);

export default Separator;

const SeparatorWrapper = styled.span`
  color: ${props => (props.color ? props.color : "blue")};
`;
