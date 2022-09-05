import styled from "styled-components";

export const Container = styled.section`
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 3.44rem;
    text-transform: uppercase;

    @media (max-width: 730px) {
      h2:first-child {
        margin-top: 100px;
      }
    }
  }
`;

export const HandlerText = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;
