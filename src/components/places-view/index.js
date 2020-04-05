import React from 'react';
import PlaceListItem, { SkeletonPlaceListItem } from '../place-list-item';

import './style.scss';

const SkeletonPlacesView = ({ error }) => (
  <div className="PlacesView container">
    {[1,2,3,4].map(item => (
      <SkeletonPlaceListItem error={error} />
    ))}
  </div>
)

const PlacesView = ({ data, loading, error }) => {
  if (loading)
    return <SkeletonPlacesView error={error} />;

  if (error)
    return <SkeletonPlacesView error={error} />;
    
  if (!data)
    return null;

  return (
    <div className="PlacesView container">
      { data.map(item => <PlaceListItem {...item} />) }
    </div>
  );
}

export default PlacesView;
