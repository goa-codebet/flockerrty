import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';

const PlacePage = () => {
  const { id } = useParams();

  return (
    <div className="PlacePage container">
      <Place id={id} />
    </div>
  );
};

export default PlacePage;
