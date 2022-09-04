import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_CONTINENTS, GET_LANGUAGES } from "../../graphql/queries";
import Continents from "../sections/Continents";
import Languages from "../sections/Languages";

const Home = () => {
  const [filter, setFilter] = useState("continent");

  // GET CONTINENTS
  const { data: dataContinents } = useQuery(GET_CONTINENTS);
  console.log(dataContinents);

  // GET LANGUAGES
  const { data: dataLanguages } = useQuery(GET_LANGUAGES);

  return (
    <div>
      <Continents continents={dataContinents?.continents} />
      <Languages languages={dataLanguages?.languages} />
    </div>
  );
};

export default Home;
