import React from "react";
import { Card, Code, Container, Info, Title } from "./CountriesStyles";

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries?.map((countries) => (
        <Card key={countries.code}>
          <Title>
            <div>
              <p>{countries.name}</p>
            </div>
          </Title>
          <Info>
            <p>{countries.phone}</p>
            <p>{countries.currency}</p>
            <p>{countries.capital}</p>
          </Info>
          <Code>
            <p>{countries.code}</p>
          </Code>
        </Card>
      ))}
    </Container>
  );
};

export default Countries;
