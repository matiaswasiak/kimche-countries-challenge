import styled from "styled-components";

export const Container = styled.div`
  p {
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: #000000;
  }
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    margin-bottom: 40px;
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 500;
    background: #f8f8f8;
    border: none;
    outline: none;
    transition: all 0.3s;

    &::placeholder {
      font-size: 14px;
      font-family: "Montserrat";
      font-weight: 300;
    }

    &:focus-visible {
      transform: scale(1.05);
    }
  }
`;
