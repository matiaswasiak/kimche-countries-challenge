import React from "react";
import { Card, Code, Container, Info, Title } from "./CountriesStyles";

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries?.map(({ code, name, phone, currency, capital }) => (
        <Card key={code}>
          <Title>
            <div>
              <p>{name}</p>
            </div>
          </Title>
          <Info>
            <p>{code}</p>
            <div>
              <p>{phone}</p>
              <p>{currency}</p>
              <p>{capital}</p>
            </div>
          </Info>
          <Code>
            <p>{code}</p>
          </Code>
        </Card>
      ))}
    </Container>
  );
};

export default Countries;
