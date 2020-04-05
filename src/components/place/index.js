import React from 'react';

import './style.scss';

const Place = ({ data, onFavourite, isFavourite }) => {
  if (!data) return null;

  const { name, address, city, categories } = data.place;

  return (
    <div className="Place">
      {console.log(data)}
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
          onClick={() => onFavourite('2bUUID')}>
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
