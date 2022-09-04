import React from "react";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((countries) => (
        <li key={countries.index}>{countries.name}</li>
      ))}
    </div>
  );
};

export default Countries;
