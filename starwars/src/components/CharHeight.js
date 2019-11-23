import React from "react";

import styled from "styled-components";

const height = styled.h3`
  color: orange;
`;

export default function CharHeight(props) {
  return <h3>Height: {props.height}</h3>;
}
