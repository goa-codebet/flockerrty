import React from 'react';

import './style.scss';

const EmptyResults = ({ text }) => {
  return (
    <div className="empty-results">
      <div className="container section">
        <h5 className="empty-results__text">{text ? text : 'No results'}</h5>
      </div>
    </div>
  );
};

export default EmptyResults;
