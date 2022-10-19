import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import background from "../images/background-star-wars.jpg";
import logo from "../logo/star-wars-4.svg";
import { useFetch } from "./useFetch";

export const CharactersList = () => {
  const characters = useFetch("https://swapi.dev/api/people/");

  // const [characters, setcharacters] = useState([]);

  // useEffect(() => {

  //   fetch("https://swapi.dev/api/people/")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setcharacters(json.results);
  //     });

  // }, []);

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

const Container = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    font-size: 20px;
    text-shadow: 2px 2px black;
    margin-bottom: 6px;
  }

  h1 {
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px black;
    margin-top: 3px;
  }
`;

const CharactersContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 375px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12rem;
  border-radius: 10px;

  a {
    font-size: 20px;
    color: white;
    padding: 20px;
    text-shadow: 2px 2px black;
    text-decoration: none;
    &:hover {
      color: dodgerblue;
    }
  }
`;
