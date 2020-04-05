import React from 'react';

import './style.scss';

const Place = () => (
  <div className="Place">
    <div className="Place__header">
      <div className="Place__header__content">
        <span>Livsmedelsbutik</span>
        <h4>Ica MAXI Stormarknad</h4>
        <div>
          <i class="fas fa-map-marker-alt"></i> Verkstadsvägen 2, 392 39 KALMAR
        </div>
      </div>
      <div className="Place__header__favourite">
        <i class="far fa-heart"></i>
      </div>
    </div>
  </div>
);

export default Place;
