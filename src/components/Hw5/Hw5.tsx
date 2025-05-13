import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation, NavigationLink } from "./Hw5.styled";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import MovieAdditionalInfo from "./MovieDetails/MovieMovieAdditionalInfo";
import Home from "./Home/Home";

export default function Hw5() {
  return (
    <BrowserRouter>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={<MovieAdditionalInfo infoType="cast" />}
          />
          <Route
            path="reviews"
            element={<MovieAdditionalInfo infoType="reviews" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export const KEY = "50f4de71d8d6f84a0d2ac79b823a444e";
