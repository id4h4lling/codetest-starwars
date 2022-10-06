import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import background from "../images/background-star-wars.jpg";

export const CharactersList = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((json) => {
        setcharacters(json.results);
      });
  }, []);

  return (
    <Container>
      <Header>
        <h2>Dating a</h2> <h1>Starwars Characters</h1>
      </Header>
      <CharactersContainer>
        {characters.map((results) => (
          <Link
            key={results.name}
            to={results.url.replace("https://swapi.dev/api", "")}
          >
            <p>{results.name}</p>
          </Link>
        ))}
      </CharactersContainer>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignment because of flex direction column
  align-items: center; //horizontal alignment because of flex direction column
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    color: red;
    padding: 10px;
    font-family: "STARWARS";
  }

  h2 {
    color: red;
    font-size: 20px;
  }
`;

const CharactersContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 30px;
  width: 50%;
  border-radius: 10px;
  padding: 40px;

  a {
    font-size: 20px;
    color: red;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;
