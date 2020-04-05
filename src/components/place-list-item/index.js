import React from 'react';
import Heatmap from '../heatmap';
import { Link } from 'react-router-dom';
import { ShineRect, ShineCircle } from '../shine';
import PlaceholderImage from '../../images/placeholder.png';

import './style.scss';

export const SkeletonPlaceListItem = ({ error }) => (
  <div className="PlaceListItem PlaceListItem--Skeleton shadow">
    <div className="PlaceListItem__thumbnail">
      <ShineCircle height="40px" width="40px" error={error} />
    </div>
    <div className="PlaceListItem__content">
      <div className="PlaceListItem__content__header">
        <div>
          <ShineRect height="13px" width="250px" error={error} />
        </div>
        <div><ShineRect height="13px" width="50px" error={error} /></div>
      </div>
      <div className="PlaceListItem__content__heatmap">
        <ShineRect height="15px" width="100%" error={error} />
      </div>
    </div>
  </div>
);

const PlaceListItem = ({ photo, name, place_id, city, hours, heatmap }) => (
  <Link className="PlaceListItem shadow" to={"/place/"+place_id}>
    <div className="PlaceListItem__thumbnail">
      <img src={photo || PlaceholderImage} loading="lazy" alt={name} />
    </div>
    <div className="PlaceListItem__content">
      <div className="PlaceListItem__content__header">
        <div>
          <span>{name}</span>
          { city && <span> ({city})</span>}
        </div>
        <div>{hours}</div>
      </div>
      <div className="PlaceListItem__content__heatmap">
        <Heatmap items={heatmap} />
      </div>
    </div>
  </Link>
);

export default PlaceListItem;
