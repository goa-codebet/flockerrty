import React, { useState } from 'react';

import './style.scss';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleOnChange = e => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSearch = e => {
    if (e.key !== 'Enter') return;
    doSearch();
  };

  const doSearch = () =>
    searchInput !== '' ? history.push(`/search/${searchInput}`) : null;

  return (
    <div className="Search shadow">
      <div className="Search__form">
        <input
          type="text"
          className="Search__form__input"
          placeholder="Search places"
          onChange={handleOnChange}
          onKeyDown={handleSearch}
          value={searchInput}
        />
        <span className="fas fa-search Search__form__icon" onClick={doSearch} />
      </div>
    </div>
  );
};

export default Search;
