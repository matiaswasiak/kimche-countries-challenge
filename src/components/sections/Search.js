import React, { useContext } from "react";
import { searchCountriesContext } from "../../context/searchCountriesContext";

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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a country..."
        value={searchCountry}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
