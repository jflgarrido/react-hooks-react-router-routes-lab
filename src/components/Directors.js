import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map(director => {
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <p>{director.movies.map(film => {
          return <li key={film}>{film}</li>
        })}
        </p>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
