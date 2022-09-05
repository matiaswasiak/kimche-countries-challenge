import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../../graphql/queries";
import Countries from "../../organisims/Countries/Countries";
import { Container, HandlerText } from "./MainStyles";

const Languages = ({ languages }) => {
  // GET LANGUAGES
  const { loading, error, data: dataCountries } = useQuery(GET_COUNTRIES);

  const { searchCountry } = useContext(searchCountriesContext);

  if (loading) return <HandlerText>Loading...</HandlerText>;
  if (error) return <HandlerText>Error :(</HandlerText>;

  const byLanguage = (nameLang) => {
    // First we filter the countries whose language name matches the name passed by parameter
    let countriesByLanguage = dataCountries?.countries?.filter(
      ({ languages }) => languages.find(({ name }) => name === nameLang)
    );

    // In case we have search information in our context, we again filter the countries received above with those of the search
    if (searchCountry !== "") {
      countriesByLanguage = countriesByLanguage?.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }

    // If doing that, we get no results, we return an empty string
    if (countriesByLanguage?.length === 0) return "";

    // Once the previous filters have been passed, we can return the information needed to show the countries
    return (
      <>
        <h2>{nameLang}</h2>
        {<Countries countries={countriesByLanguage} />}
      </>
    );
  };

  return (
    <Container>
      {languages?.map(({ name, code }) => (
        <h2 key={code}>{byLanguage(name)}</h2>
      ))}
    </Container>
  );
};

export default Languages;
