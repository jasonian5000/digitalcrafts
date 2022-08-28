import React from "react";
import MovieCard from "./MovieCard";

export default function MovieContainer(props) {
  return (
    <div className="movie-container">
      {props?.results?.Search?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          setSelectedMovie={props.setSelectedMovie}
          selectedMovie={props.selectedMovie}
        />
      ))}
    </div>
  );
}
