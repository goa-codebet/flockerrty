import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const CategoryBar = ({ category, link }) => {
  return (
    <div className="Category-bar">
      <h3>{category}</h3>
      <Link to={link}>See all</Link>
    </div>
  );
};

export default CategoryBar;
