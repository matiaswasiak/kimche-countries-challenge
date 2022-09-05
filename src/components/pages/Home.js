import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Continents from "../sections/Main/Continents";
import Languages from "../sections/Main/Languages";
import Header from "../sections/Header/Header";
import styled from "styled-components";
import Search from "../organisims/Search/Search";
import Filter from "../organisims/Filter/Filter";
import { GET_CONTINENTS, GET_LANGUAGES } from "../../graphql/queries";

const Home = () => {
  const [filter, setFilter] = useState("continent");

  // GET CONTINENTS
  const { data: dataContinents } = useQuery(GET_CONTINENTS);

  // GET LANGUAGES
  const { data: dataLanguages } = useQuery(GET_LANGUAGES);

  return (
    <Container>
      {/* Header Section */}
      <Header />

      {/* Search Section */}
      <Search />

      {/* Filter Section */}
      <Filter setFilter={setFilter} filter={filter} />

      {/* Content Section */}
      <main>
        {filter === "continent" ? (
          <Continents continents={dataContinents?.continents} />
        ) : (
          <Languages languages={dataLanguages?.languages} />
        )}
      </main>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default Home;
