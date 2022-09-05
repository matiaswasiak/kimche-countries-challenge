import React from "react";
import { Container, Filters } from "./FilterStyles";

const Filter = ({ setFilter }) => {
  return (
    <Container>
      <p>And why not? Choose how you want to group it.</p>

      <Filters>
        <div onClick={() => setFilter("continent")}>
          <p>Continent</p>
        </div>

        <div onClick={() => setFilter("language")}>
          <p>Language</p>
        </div>
      </Filters>
    </Container>
  );
};

export default Filter;
