import React, { useState } from 'react';

import './style.scss';

const Place = ({ data, onFavourite }) => {
  if (!data) return null;

  const { name, address, city, categories, place_id } = data.place;
  const isFavourite = data.favorites.find(fav => place_id === fav.place_id);

  return (
    <div className="Place">
      <div className="Place__header">
        <div className="Place__header__content">
          <span>{categories[0]}</span>
          <h4>{name}</h4>
          <div>
            <i className="fas fa-map-marker-alt"></i> {address}
          </div>
        </div>
        <div
          className="Place__header__favourite"
          onClick={() => {onFavourite(place_id)}}>
          {isFavourite ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Place;
