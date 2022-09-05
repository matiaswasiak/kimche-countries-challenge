import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_CONTINENTS, GET_LANGUAGES } from "../../graphql/queries";
import Filter from "../organisims/Filter";
import Continents from "../sections/Continents";
import Languages from "../sections/Languages";
import Search from "../organisims/Search";
import Header from "../sections/Header";
import styled from "styled-components";

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
      <Content>
        {filter === "continent" ? (
          <Continents continents={dataContinents?.continents} />
        ) : (
          <Languages languages={dataLanguages?.languages} />
        )}
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Content = styled.main``;

export default Home;
