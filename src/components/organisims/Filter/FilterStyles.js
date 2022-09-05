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

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;

    p {
      display: flex;
      align-items: center;
      height: 50px;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    cursor: pointer;
    transition: all 0.4s;

    &.is-active,
    &:hover,
    &:focus {
      background-color: #1b1f2a;
      color: #f0f0f0;
    }

    &:last-child {
      border-left: 1px solid #ccc;

      @media (max-width: 730px) {
        border: none;
      }
    }

    p {
      padding: 0;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-transform: uppercase;
    }
  }
`;
