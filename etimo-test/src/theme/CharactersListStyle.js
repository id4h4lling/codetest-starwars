import styled from "styled-components";
import background from "../images/background-star-wars.jpg";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const Container = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    font-size: 18px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin: 10rem;
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
  @media ${devices.desktop} {
    width: 785px;
    grid-template-columns: repeat(3, 1fr);
    margin: 15rem;
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }
  }
`;
