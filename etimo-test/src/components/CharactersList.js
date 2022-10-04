import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../images/background-star-wars.jpg";

export const CharactersList = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((json) => {
        setcharacters(json.results);
        console.log(json.results);
      });
  }, []);

  return (
    <Container>
      {" "}
      <p>Starwars Characters</p>
      <div>
        {" "}
        <img src={backgroundImage} alt="backgroundimage" />
      </div>
      {characters.map((results) => (
        <NavLink key={results.name} to={`/characters/${results.name}`}>
          <p>{results.name}</p>
        </NavLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
`;
