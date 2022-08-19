import React from "react";
import { useNavigate } from "react-router-dom";


export default function MovieCard(props) {
  const navigate = useNavigate();
  const getMovieDetails = () => {
    props.setSelectedMovie(props.movie);
    navigate("/MovieDetails")
    }
  return (
    <div className="movie-card">
      <p>
        {props.movie.Title} ({props.movie.Year})
      </p>
      <img
        onClick={() => getMovieDetails()}
        className="movie-poster"
        src={props.movie.Poster}
        alt=""
      />
    </div>
  );
}
