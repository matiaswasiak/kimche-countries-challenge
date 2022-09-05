import React, { useContext } from "react";
import { searchCountriesContext } from "../../context/searchCountriesContext";
import styled from "styled-components";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const { searchCountry, setCountry } = useContext(searchCountriesContext);

  return (
    <Container>
      <p>Try to write something.</p>
      <Form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a country..."
          value={searchCountry}
          onChange={handleChange}
        />
      </Form>
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

export const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    margin-bottom: 40px;
    background: #f8f8f8;
    border: none;
    outline: none;
  }
`;

export default Search;
