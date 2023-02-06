import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios({
          url: `https://api.themoviedb.org/3/movie/${movieId}`,
          params: {
            api_key: 'ca424eff7fbaf09a031c41d59d15f681',
          },
        });
        console.log(res);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { original_title, tagline, overview, poster_path } = movie;
  return (
    <div className='poster'>
      <div className='description'>
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className='poster-image'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`Move poster for ${original_title}`}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
