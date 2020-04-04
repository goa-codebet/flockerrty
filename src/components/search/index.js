import React from 'react';

import './style.scss';

export default () => {
  return (
    <div className="Search elevation-3">
      <input
        type="text"
        className="Search__input"
        placeholder="Search places"
      />
      <span className="fas fa-search Search__icon" />
    </div>
  );
};
