import React from 'react';
import PlaceListItem from '../place-list-item';

import './style.scss';

const PlacesView = ({ items }) => (
  <div className="PlacesView container">
    {items.map((item, i) => (
      <PlaceListItem {...item} key={`placeview-${i}`} />
    ))}
  </div>
);

export default PlacesView;
