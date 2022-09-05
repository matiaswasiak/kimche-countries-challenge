import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Country Search</h1>
    </Container>
  );
};

export const Container = styled.header`
  h1 {
    padding-top: 40px;
    padding-bottom: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 75px;
    line-height: 91px;
    color: #000000;
    text-transform: uppercase;
  }
`;

export default Header;
