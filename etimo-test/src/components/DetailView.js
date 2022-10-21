import { useParams, useNavigate } from "react-router-dom";

import { useFetch } from "./UseFetch";
import {
  Container,
  DetailContainer,
  GoBackButton,
} from "../theme/DetailViewStyle";

export const DetailView = () => {
  const { id } = useParams();
  const detail = useFetch(`https://swapi.dev/api/people/${id}`);
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

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
      <GoBackButton onClick={onBackButtonClick}> Go back</GoBackButton>
    </Container>
  );
};
