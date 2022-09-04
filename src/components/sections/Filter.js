import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div>
      <div onClick={() => setFilter("continent")}>
        <h3>Continent</h3>
      </div>

      <div onClick={() => setFilter("language")}>
        <h3>Language</h3>
      </div>
    </div>
  );
};

export default Filter;
