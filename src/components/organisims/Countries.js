import React from "react";
import styled from "styled-components";

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries?.map((countries) => (
        <Card key={countries.code}>
          <Title>
            <div>
              <p>{countries.name}</p>
            </div>
          </Title>
          <Info>
            <p>{countries.phone}</p>
            <p>{countries.currency}</p>
            <p>{countries.capital}</p>
          </Info>
          <Code>
            <p>{countries.code}</p>
          </Code>
        </Card>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  padding: 20px;
  height: 450px;
  font-size: 10px;
  background: #d9d9d9;
`;

export const Title = styled.div`
  width: 50%;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;

    p {
      position: absolute;
      left: -135px;
      top: 135px;
      height: 140px;
      width: 410px;
      font-weight: 500;
      font-size: 40px;
      line-height: 65px;
      transform: rotate(-90deg);
    }
  }
`;

export const Info = styled.div`
  width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    text-align: end;
    word-wrap: break-word;
  }
`;

export const Code = styled.div`
  position: absolute;
  right: 0%;

  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    transform: rotate(-90deg);
    margin-top: 4px;
    margin-right: -30px;
    text-align: end;
  }
`;

export default Countries;
