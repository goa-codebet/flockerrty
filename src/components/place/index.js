import React from 'react';

import './style.scss';

const Place = ({ onFavourite, isFavourite }) => (
  <div className="Place">
    <div className="Place__header">
      <div className="Place__header__content">
        <span>Livsmedelsbutik</span>
        <h4>Ica MAXI Stormarknad</h4>
        <div>
          <i className="fas fa-map-marker-alt"></i> Verkstadsvägen 2, 392 39
          KALMAR
        </div>
      </div>
      <div
        className="Place__header__favourite"
        onClick={() => onFavourite('2bUUID')}>
        {isFavourite ? (
          <i class="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </div>
    </div>
  </div>
);

export default Place;
