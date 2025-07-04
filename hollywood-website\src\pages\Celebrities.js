import React from 'react';
import { Link } from 'react-router-dom';
import celebrityData from '../data/celebrities';

function Celebrities() {
  return (
    <div className="celebrities">
      <h1>Celebrities</h1>
      <ul>
        {celebrityData.map((celebrity) => (
          <li key={celebrity.id}>
            <Link to={`/celebrities/${celebrity.id}`}>{celebrity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Celebrities;