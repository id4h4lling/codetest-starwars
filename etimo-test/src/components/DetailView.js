import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

export const DetailView = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
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
      {detail && (
        <div>
          <p>{detail.eye_color}</p>
        </div>
      )}
      <GoBackButton onClick={onBackButtonClick}>‹ Go back</GoBackButton>
      <div>Balloba</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: red;
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
  left: 40px;
  top: 20px;
  appearance: none;
  border: none;
  background-color: transparent;
  transition: 0.3s;
  font-size: 20px;
  cursor: pointer;
`;
