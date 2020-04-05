import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';
import Scheduler from '../components/scheduler';

const PlacePage = () => {
  const { id } = useParams();

  return (
    <div className="PlacePage container">
      <Place onFavourite={handleOnFavourite} isFavourite={parseInt(2) === 2} />
      <Scheduler onScheduleTime={handleScheduleTime} />
    </div>
  );
};

const handleScheduleTime = date => {
  console.log('Booking date', date);
};

const handleOnFavourite = uuid => {
  console.log('handleOnFavourite');
};

export default PlacePage;
