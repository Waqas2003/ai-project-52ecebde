import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news';

function News() {
  return (
    <div className="news">
      <h1>News</h1>
      <ul>
        {newsData.map((news) => (
          <li key={news.id}>
            <Link to={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;