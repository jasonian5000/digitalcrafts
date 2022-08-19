import React, { useState } from "react";
import { useEffect } from "react";

export default function MovieDetails(props) {
  // const movie = {
  //   Title: "The Avengers",
  //   Year: "2012",
  //   Rated: "PG-13",
  //   Released: "04 May 2012",
  //   Runtime: "143 min",
  //   Genre: "Action, Adventure, Sci-Fi",
  //   Director: "Joss Whedon",
  //   Writer: "Joss Whedon, Zak Penn",
  //   Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  //   Plot: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
  //   Language: "English, Russian, Hindi",
  //   Country: "United States",
  //   Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //   Ratings: [
  //     {
  //       Source: "Internet Movie Database",
  //       Value: "8.0/10",
  //     },
  //     {
  //       Source: "Rotten Tomatoes",
  //       Value: "91%",
  //     },
  //     {
  //       Source: "Metacritic",
  //       Value: "69/100",
  //     },
  //   ],
  //   Metascore: "69",
  //   imdbRating: "8.0",
  //   imdbVotes: "1,367,826",
  //   imdbID: "tt0848228",
  //   Type: "movie",
  //   DVD: "25 Sep 2012",
  //   BoxOffice: "$623,357,910",
  //   Production: "N/A",
  //   Website: "N/A",
  //   Response: "True",
  // };
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?apikey=&i=${props.selectedMovie.imdbID}&type=movie`;
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      setMovie(json)
    }
    fetchMovieDetails()
  }, [])
  return (
    <div className="movie-details-wrapper">
      <h1>{movie.Title}</h1>
      <div className="movie-details-main">
        <div>
          <img src={movie.Poster} alt="" />
        </div>
        <div className="info-panel">
          <p>{movie.Plot}</p>
          <div className="info-extra">
            <p>Year: {movie.Year} </p>
            <p>Rated: {movie.Rated}</p>
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Writer: {movie.Writer}</p>
            <p>Actors: {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
