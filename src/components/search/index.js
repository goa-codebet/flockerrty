import React from 'react';

import './style.scss';

export default function Search() {
  return (
    <div className="search elevation-3">
      <input
        type="text"
        className="search__input"
        placeholder="Search places"
      />
      <span className="fas fa-search search__icon" />
    </div>
  );
}
