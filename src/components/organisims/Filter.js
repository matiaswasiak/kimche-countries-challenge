import React from "react";
import styled from "styled-components";

const Filter = ({ setFilter }) => {
  return (
    <Container>
      <p>And why not? Choose how you want to group it.</p>

      <Filters>
        <div onClick={() => setFilter("continent")}>
          <p>Continent</p>
        </div>

        <div onClick={() => setFilter("language")}>
          <p>Language</p>
        </div>
      </Filters>
    </Container>
  );
};

export const Container = styled.div`
  p {
    padding-bottom: 10px;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
`;

export const Filters = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    cursor: pointer;

    &:last-child {
      border-left: 1px solid #ccc;
    }

    p {
      padding: 0;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      text-transform: uppercase;
      border-bottom: 1px solid #ccc;
    }
  }
`;

export default Filter;
