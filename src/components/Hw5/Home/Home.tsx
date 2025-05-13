import { useEffect, useState } from "react";
import { KEY } from "../Hw5";
import { MovieElem, MovieLink, MovieList } from "../Movies/Movies.styled";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  const baseUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setMovieList(data?.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [baseUrl]);

  return (
    <>
      <h2>Trending</h2>
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
