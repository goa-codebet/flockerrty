import React, { useState } from 'react';
import cn from 'classnames';

import './style.scss';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = e => {
    const value = e.target.value;
    setSearchInput(value);

    if (value === '') return setSearchResult([]);
    setSearchResult([value, value, value]);
  };

  return (
    <div
      className={cn('Search shadow', {
        'Search--hasresult': searchResult.length > 0,
      })}>
      <div className="Search__form">
        <input
          type="text"
          className="Search__form__input"
          placeholder="Search places"
          onChange={handleSearch}
          value={searchInput}
        />
        <span className="fas fa-search Search__form__icon" />
      </div>
      <div className="Search__result shadow">
        <ul>
          {searchResult.map((r, i) => (
            <li className="Search__result__item" key={`result-${i}`}>
              <Link to="/place/">{r}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
