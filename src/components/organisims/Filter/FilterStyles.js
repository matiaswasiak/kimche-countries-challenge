import styled from "styled-components";

export const Container = styled.div`
  p {
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.8rem;
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
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-transform: uppercase;
      border-bottom: 1px solid #ccc;
    }
  }
`;
