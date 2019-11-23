import React from "react";

import styled from "styled-components";

const HairColor = styled.h3`
  color: #8000ff;
`;

export default function CharHairColor(props) {
  return <HairColor>Hair Color: {props.haircolor}</HairColor>;
}
