import { Outlet, useLocation } from "react-router-dom";
import {
  InfoContainer,
  InfoImg,
  InfoList,
  InfoListElem,
  InfoListLink,
  InfoText,
  InfoTextContainer,
  InfoTitle,
} from "./MovieDetails.styled";
import { useEffect, useState } from "react";
import { KEY } from "../Hw5";

export default function MovieDetails() {
  const location = useLocation();

  const [movieData, setMovieData] = useState<any>();

  const state = location.state.data;
  const baseUrl = `https://api.themoviedb.org/3/movie/${state.id}?api_key=${KEY}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [baseUrl]);

  return (
    <>
      <InfoContainer>
        <InfoImg
          src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          alt={movieData?.title}
        />
        <InfoTextContainer>
          <InfoTitle>{movieData?.title}</InfoTitle>
          <InfoText>User score : {movieData?.vote_average * 10}%</InfoText>
          <InfoText>Overview :</InfoText>
          <InfoText>{movieData?.overview}</InfoText>
          <InfoText>Genres :</InfoText>
          <InfoText>
            {movieData?.genres.map(
              (elem: { id: number; name: string }) => `${elem.name} - `
            )}
          </InfoText>
        </InfoTextContainer>
      </InfoContainer>
      <InfoTextContainer>
        <InfoText>Additional information :</InfoText>
        <InfoList>
          <InfoListElem>
            <InfoListLink
              to={`/movies/${state.id}/cast`}
              state={{ data: state }}
            >
              Cast
            </InfoListLink>
          </InfoListElem>
          <InfoListElem>
            <InfoListLink
              to={`/movies/${state.id}/reviews`}
              state={{ data: state }}
            >
              Reviews
            </InfoListLink>
          </InfoListElem>
        </InfoList>
      </InfoTextContainer>
      <Outlet context={{ data: movieData }} />
    </>
  );
}
