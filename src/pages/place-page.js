import React from 'react';
import { useParams } from 'react-router-dom';

const PlacePage = () => {
  const { id } = useParams();

  return <div className="PlaceView">Hejsan {id}</div>;
};

export default PlacePage;
