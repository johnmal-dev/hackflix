import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Catalogue from './Components/Catalogue';
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios({
          url: 'https://api.themoviedb.org/3/discover/movie',
          params: {
            api_key: 'ca424eff7fbaf09a031c41d59d15f681',
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: 1,
            primary_release_year: 2022,
          },
        });
        setMovies(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };
    getMovies();
  }, []);
  return (
    <div className='wrapper'>
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Catalogue movies={movies} />}
        />
        <Route
          path='/movie/:movieId'
          element={<MovieDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;

// on component mount (useEffect)
// fetch list of popular movies for a specific year from TMDB API with axios
// store those movies in state
// map thru the movies state to render JSX with the movie posters
