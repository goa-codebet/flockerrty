import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';
import Scheduler from '../components/scheduler';

const PlacePage = () => {
  const { id } = useParams();

  return (
    <div className="PlacePage container">
      <Place id={id} />
      <Scheduler />
    </div>
  );
};

export default PlacePage;
