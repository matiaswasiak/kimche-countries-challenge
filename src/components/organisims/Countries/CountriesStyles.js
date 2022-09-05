import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1090px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 730px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  padding: 20px;
  height: 450px;
  font-size: 0.625rem;
  background: #d9d9d9;
  transition: all 0.5s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #202124;
    color: #f0f0f0;
    box-shadow: 0 0 1px #ccc;
  }

  @media (max-width: 730px) {
    text-align: start;
  }
`;

export const Title = styled.div`
  width: 50%;
  overflow: hidden;

  div {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    p {
      position: absolute;
      left: -135px;
      top: 135px;
      height: 140px;
      width: 410px;
      font-size: 2.5rem;
      line-height: 4.05rem;
      transform: rotate(-90deg);
    }
  }
`;

export const Info = styled.div`
  width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;

  & > p {
    color: #d9d9d9;
    font-size: 40px;
    font-weight: 600;
  }

  div {
    p {
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 1.5rem;
      text-align: end;
      word-wrap: break-word;
    }
  }
`;

export const Code = styled.div`
  position: absolute;
  right: 0;

  p {
    margin-top: 4px;
    margin-right: -30px;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5rem;
    transform: rotate(-90deg);
    text-align: end;
  }
`;
