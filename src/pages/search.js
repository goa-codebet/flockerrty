import React from 'react';
import { useParams } from 'react-router';

const SearchPage = () => {
  const { q } = useParams();
  return (
    <div>
      <div className="container">
        <h1>Search</h1>
        <p>q: {q}</p>
      </div>
    </div>
  );
};

export default SearchPage;
