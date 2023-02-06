import React from 'react';
import { Link } from 'react-router-dom';

const Catalogue = ({ movies }) => {
  return (
    <ul className='catalogue'>
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            ></img>
          </Link>
        );
      })}
    </ul>
  );
};

export default Catalogue;
