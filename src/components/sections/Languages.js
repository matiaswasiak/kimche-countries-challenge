import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { searchCountriesContext } from "../../context/searchCountriesContext";
import { GET_COUNTRIES } from "../../graphql/queries";
import Countries from "../organisims/Countries";

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
    <div>
      <ul>
        {languages?.map(({ name, index }) => (
          <li key={index}>{byLanguage(name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
