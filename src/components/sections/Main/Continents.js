import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../../graphql/queries";
import Countries from "../../organisims/Countries/Countries";
import { Container, HandlerText } from "./MainStyles";

const Continents = ({ continents }) => {
  // GET COUNTRIES
  const { loading, error, data: dataCountries } = useQuery(GET_COUNTRIES);

  const { searchCountry } = useContext(searchCountriesContext);

  if (loading) return <HandlerText>Loading...</HandlerText>;
  if (error) return <HandlerText>Error :(</HandlerText>;

  const byContinent = (name) => {
    // First we filter the countries whose continent name matches the name passed by parameter
    let countriesByContinent = dataCountries?.countries?.filter(
      ({ continent }) => continent.name === name
    );

    // In case we have search information in our context, we again filter the countries received above with those of the search
    if (searchCountry !== "") {
      countriesByContinent = countriesByContinent?.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }

    // If doing that, we get no results, we return an empty string
    if (countriesByContinent?.length === 0) return "";

    // Once the previous filters have been passed, we can return the information needed to show the countries
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
