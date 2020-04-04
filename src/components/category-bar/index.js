import React from 'react';
import './style.scss';

const CategoryBar = ({ category, link }) => {
  return (
    <div className="Category-bar">
      <h3>{category}</h3>
      <span>{link}</span>
    </div>
  );
};

export default CategoryBar;
