import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <p>{actor.movies.map(film => {
          return <li key={film}>{film}</li>
        })}
        </p>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
