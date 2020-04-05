import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';
import Scheduler from '../components/scheduler';

const PlacePage = () => {
  const { id } = useParams();

  return (
    <div className="PlacePage container">
      <Place id={id} />
      <Scheduler onBookItem={handleBookItem} />
    </div>
  );
};

const handleBookItem = date => {
  console.log('Booking date', date);
};

export default PlacePage;
