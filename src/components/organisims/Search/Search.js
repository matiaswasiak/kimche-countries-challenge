import React, { useContext } from "react";
import { searchCountriesContext } from "../../../context/searchCountriesContext";
import { Container, Form } from "./SearchStyles";

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

export default Search;
