import styled from "styled-components";
import background from "../images/background-star-wars.jpg";

export const Container = styled.div`
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
export const Header = styled.div`
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
export const CharactersContainer = styled.div`
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
