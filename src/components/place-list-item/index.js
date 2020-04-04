import React from 'react';

import './style.scss';

const PlaceListItem = ({ thumbnail, name, city, hours, heatmap }) => (
  <div className="PlaceListItem shadow">
    <div className="PlaceListItem__thumbnail">
      <img src={thumbnail} loading="lazy" alt={name} />
    </div>
    <div className="PlaceListItem__content">
      <div className="PlaceListItem__content__header">
        <div>
          <span>{name}</span> ({city})
        </div>
        <div>{hours}</div>
      </div>
      <div className="PlaceListItem__content__heatmap"></div>
    </div>
  </div>
);

export default PlaceListItem;
