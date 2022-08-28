import { useState, useEffect } from "react";
import "./App.css";
import MovieContainer from "./components/MovieContainer";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import About from "./components/About";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const fetchMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=&s=${query}&type=movie`
    );
    const json = await response.json();
    setResults(json);
    setQuery("");
    console.log(json);
  };

  // const results = {
  //   Search: [
  //     {
  //       Title: "The Avengers",
  //       Year: "2012",
  //       imdbID: "tt0848228",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Avengers: Endgame",
  //       Year: "2019",
  //       imdbID: "tt4154796",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Avengers: Infinity War",
  //       Year: "2018",
  //       imdbID: "tt4154756",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Avengers: Age of Ultron",
  //       Year: "2015",
  //       imdbID: "tt2395427",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "The Avengers",
  //       Year: "1998",
  //       imdbID: "tt0118661",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Ultimate Avengers: The Movie",
  //       Year: "2006",
  //       imdbID: "tt0491703",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Ultimate Avengers II",
  //       Year: "2006",
  //       imdbID: "tt0803093",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Next Avengers: Heroes of Tomorrow",
  //       Year: "2008",
  //       imdbID: "tt1259998",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Avengers Confidential: Black Widow & Punisher",
  //       Year: "2014",
  //       imdbID: "tt3482378",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BMTU2MDg0Njk4MF5BMl5BanBnXkFtZTgwMTY0OTIyMTE@._V1_SX300.jpg",
  //     },
  //     {
  //       Title: "Crippled Avengers",
  //       Year: "1978",
  //       imdbID: "tt0077292",
  //       Type: "movie",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BOTgzMjMxOTYtYzQzZi00NWM1LTljZDMtN2UwZWE3MjlhZDdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //     },
  //   ],
  //   totalResults: "114",
  //   Response: "True",
  // };

  return (
    <div className="App">
      <SearchBar
        query={query}
        setQuery={setQuery}
        fetchMovies={fetchMovies}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MovieContainer
              results={results}
              setSelectedMovie={setSelectedMovie}
              selectedMovie={selectedMovie}
            />
          }
        />
        <Route path="/MovieDetails" element={<MovieDetails selectedMovie={selectedMovie} />}/>
      </Routes>
    </div>
  );
}

export default App;
