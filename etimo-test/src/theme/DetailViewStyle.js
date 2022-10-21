import styled from "styled-components";
import backgroundTwo from "../images/bakground_2.jpg";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};
export const Container = styled.div`
  background-image: url(${backgroundTwo});
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
export const DetailContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  width: 300px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 30%;

  h2 {
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px black;
  }
  p {
    color: white;
    font-size: 18px;
    line-height: 30px;
    text-shadow: 2px 2px black;
  }

  .color {
    color: darkorange;
  }

  .bold {
    font-weight: bold;
  }

  @media ${devices.desktop} {
    width: 30%;
    margin-top: 20%;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }
`;
export const GoBackButton = styled.button`
  margin-top: 30px;
  border-style: none;

  position: absolute;
  display: inline-flex;

  color: #fff;
  align-items: center;
  font-weight: 900;
  text-decoration: none;
  top: 20px;
  left: 30px;
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
