import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_CONTINENTS, GET_LANGUAGES } from "../../graphql/queries";
import Continents from "../sections/Continents";
import Filter from "../sections/Filter";
import Languages from "../sections/Languages";
import Search from "../sections/Search";

const Home = () => {
  const [filter, setFilter] = useState("continent");

  // GET CONTINENTS
  const { data: dataContinents } = useQuery(GET_CONTINENTS);

  // GET LANGUAGES
  const { data: dataLanguages } = useQuery(GET_LANGUAGES);

  return (
    <div>
      <Search />
      <Filter setFilter={setFilter} filter={filter} />

      {filter === "continent" ? (
        <Continents continents={dataContinents?.continents} />
      ) : (
        <Languages languages={dataLanguages?.languages} />
      )}
    </div>
  );
};

export default Home;
