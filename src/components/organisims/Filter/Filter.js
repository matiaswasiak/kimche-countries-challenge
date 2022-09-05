import React from "react";
import { Container, Filters } from "./FilterStyles";

const Filter = ({ setFilter, filter }) => {
  return (
    <Container>
      <p>And why not? Choose how you want to group it.</p>

      <Filters>
        <div
          className={`${filter === "continent" ? "is-active" : ""}`}
          onClick={() => setFilter("continent")}
        >
          <p>Continent</p>
        </div>

        <div
          className={`${filter === "language" ? "is-active" : ""}`}
          onClick={() => setFilter("language")}
        >
          <p>Language</p>
        </div>
      </Filters>
    </Container>
  );
};

export default Filter;
