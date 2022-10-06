import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import backgroundTwo from "../images/bakground_2.jpg";

export const DetailView = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then(
        (json) => {
          setDetail(json);
        },
        [id]
      );
  });

  return (
    <Container>
      <DetailContainer>
        {detail && (
          <div>
            <h2>{detail.name}</h2>
            <p>
              Is a perfect match for you. {detail.name} eyes are{" "}
              {detail.eye_color} and hair is {detail.hair_color}.
            </p>
            <p>
              {detail.name} was born in {detail.birth_year}. It's so nice that
              you have that in common. You never now what you're missing, reach
              out to night by shouting {detail.name} three times to the stars.
            </p>
            <p></p>
          </div>
        )}
      </DetailContainer>
      <GoBackButton onClick={onBackButtonClick}>‹ Go back</GoBackButton>
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
  margin-top: 40px;

  h2 {
    color: #ac8725;
  }
  p {
    color: #3a93ae;
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
`;
