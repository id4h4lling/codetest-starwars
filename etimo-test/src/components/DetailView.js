import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import backgroundTwo from "../images/bakground_2.jpg";

import { useFetch } from "./useFetch";

export const DetailView = () => {
  const { id } = useParams();
  // const [detail, setDetail] = useState();
  const detail = useFetch(`https://swapi.dev/api/people/${id}`);
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${id}`)
  //     .then((res) => res.json())
  //     .then(
  //       (json) => {
  //         setDetail(json);
  //       },
  //       [id]
  //     );
  // });

  return (
    <Container>
      <DetailContainer>
        {detail && (
          <div>
            <h2>
              Your pick was <span className="color">{detail.name}</span>
            </h2>
            <p>
              That is a truley perfect match for you!{" "}
              <span className="bold">{detail.name}</span> eyes are{" "}
              <span className="bold"> {detail.eye_color}</span> and hair is{" "}
              <span className="bold">{detail.hair_color}</span>.
            </p>
            <p>
              <span className="bold">{detail.name}</span> was born in{" "}
              <span className="bold"> {detail.birth_year}</span>, it's so nice
              that you have that in common. You never know what you're missing,
              reach out to night by shouting{" "}
              <span className="bold">{detail.name}</span> three times to the
              stars.
            </p>
            <p></p>
          </div>
        )}
      </DetailContainer>
      <GoBackButton onClick={onBackButtonClick}>‹ Pick another</GoBackButton>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${backgroundTwo});
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

const DetailContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  width: 30%;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20%;

  h2 {
    color: white;
    text-shadow: 2px 2px black;
  }
  p {
    color: white;
    line-height: 30px;
    text-shadow: 2px 2px black;
  }

  .color {
    color: darkorange;
  }

  .bold {
    font-weight: bold;
  }
`;

const GoBackButton = styled.button`
  width: 150px;
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
