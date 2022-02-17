import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>Length: {movie.time} minutes</h3>
        <p>Genre: {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li>
        })}
        </p>
    </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
