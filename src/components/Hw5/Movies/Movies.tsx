import { useState } from "react";
import { KEY } from "../Hw5";
import {
  Form,
  Input,
  MovieElem,
  MovieLink,
  MovieList,
  SubmitButton,
} from "./Movies.styled";

export default function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetch(`${baseUrl}&query=${searchInput}`);
      const movies = await result.json();
      setMovieList(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </Form>

      <MovieList>
        {movieList.map((elem: any) => (
          <MovieElem key={elem.id}>
            <MovieLink to={`/movies/${elem.id}`} state={{ data: elem }}>
              {elem.title}
            </MovieLink>
          </MovieElem>
        ))}
      </MovieList>
    </>
  );
}
