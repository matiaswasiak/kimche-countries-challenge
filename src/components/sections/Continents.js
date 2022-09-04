import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../graphql/queries";
import Countries from "../organisims/Countries";

const Continents = ({ continents }) => {
  // GET COUNTRIES
  const { data: dataCountries } = useQuery(GET_COUNTRIES);

  const { searchCountry } = useContext(searchCountriesContext);

  const byContinent = (name) => {
    let countriesByContinent = dataCountries?.countries?.filter(
      ({ continent }) => continent.name === name
    );

    if (searchCountry !== "") {
      countriesByContinent = countriesByContinent.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }

    return (
      <>
        <h2>{name}</h2>
        {<Countries countries={countriesByContinent} />}
      </>
    );
  };

  return (
    <div>
      <ul>
        {continents?.map(({ name, index }) => (
          <li key={index}>{byContinent(name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
