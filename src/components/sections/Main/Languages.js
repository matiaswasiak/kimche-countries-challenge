import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../../graphql/queries";
import Countries from "../../organisims/Countries/Countries";
import { Container } from "./MainStyles";

const Languages = ({ languages }) => {
  // GET LANGUAGES
  const { data: dataCountries } = useQuery(GET_COUNTRIES);

  const { searchCountry } = useContext(searchCountriesContext);

  const byLanguage = (nameLang) => {
    let countriesByLanguage = dataCountries?.countries?.filter(
      ({ languages }) => languages.find(({ name }) => name === nameLang)
    );

    if (searchCountry !== "") {
      countriesByLanguage = countriesByLanguage?.filter(({ name }) =>
        name.toLowerCase().includes(searchCountry.toLowerCase())
      );

      if (countriesByLanguage?.length === 0) {
        return "";
      }
    }

    return (
      <>
        <h2>{nameLang}</h2>
        {<Countries countries={countriesByLanguage} />}
      </>
    );
  };

  return (
    <Container>
      {languages?.map(({ name, index }) => (
        <h2 key={index}>{byLanguage(name)}</h2>
      ))}
    </Container>
  );
};

export default Languages;
