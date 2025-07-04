import React from 'react';
import { Link } from 'react-router-dom';
import movieData from '../data/movies';

function Movies() {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <ul>
        {movieData.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;