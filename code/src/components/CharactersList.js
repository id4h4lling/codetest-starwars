import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo/star-wars-4.svg";
import {
  Container,
  Header,
  CharactersContainer,
} from "../theme/CharactersListStyle";
import { useFetch } from "./UseFetch";

export const CharactersList = () => {
  const characters = useFetch("https://swapi.dev/api/people/");

  return (
    <Container>
      <Header>
        <h2>Dating a</h2>
        <img src={logo} alt="starwars logo" />
        <h1>Character</h1>
      </Header>
      <CharactersContainer>
        {characters &&
          characters.results.map((results) => (
            <Link
              key={results.name}
              to={results.url.replace("https://swapi.dev/api/", "")}
            >
              <p>{results.name}</p>
            </Link>
          ))}
      </CharactersContainer>
    </Container>
  );
};
