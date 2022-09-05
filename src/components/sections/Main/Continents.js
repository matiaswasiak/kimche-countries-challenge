import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../../graphql/queries";
import Countries from "../../organisims/Countries/Countries";
import { Container } from "./MainStyles";

const Continents = ({ continents }) => {
  // GET COUNTRIES
  const { data: dataCountries } = useQuery(GET_COUNTRIES);

  const { searchCountry } = useContext(searchCountriesContext);

  const byContinent = (name) => {
    let countriesByContinent = dataCountries?.countries?.filter(
      ({ continent }) => continent.name === name
    );

    if (searchCountry !== "") {
      countriesByContinent = countriesByContinent?.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
      );

      if (countriesByContinent?.length === 0) {
        return "";
      }
    }

    return (
      <>
        <h2>{name}</h2>
        {<Countries countries={countriesByContinent} />}
      </>
    );
  };

  return (
    <Container>
      {continents?.map(({ name, code }) => (
        <h2 key={code}>{byContinent(name)}</h2>
      ))}
    </Container>
  );
};

export default Continents;
