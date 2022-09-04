import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

export const GET_LANGUAGES = gql`
  {
    languages {
      name
      code
    }
  }
`;

export const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      phone
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
