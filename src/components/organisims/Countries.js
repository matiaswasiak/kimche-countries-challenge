import React from "react";

const Countries = ({ countries }) => {
  return (
    <div>
      <ul>
        {countries?.map((countries) => (
          <li key={countries.code}>{countries.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
