import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

function Home() {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero Image" />
      <h1>Welcome to Hollywood!</h1>
      <p>Explore the world of movies, celebrities, and news.</p>
      <Link to="/movies">Browse Movies</Link>
      <Link to="/celebrities">Discover Celebrities</Link>
      <Link to="/news">Get the Latest News</Link>
    </div>
  );
}

export default Home;