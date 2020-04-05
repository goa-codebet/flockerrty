import React from 'react';
import { Link } from 'react-router-dom';

const TagListItem = ({ label, link }) => {
  return (
    <div className="Tag-list__item shadow">
      <Link to={link}>{label}</Link>
    </div>
  );
};

export default TagListItem;
