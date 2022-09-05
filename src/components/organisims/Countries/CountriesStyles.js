import styled from "styled-components";

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
  font-size: 0.625rem;
  background: #d9d9d9;
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
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;

  p {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: end;
    word-wrap: break-word;
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
