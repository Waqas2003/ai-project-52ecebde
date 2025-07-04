import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/celebrities">Celebrities</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;