import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';
import Scheduler from '../components/scheduler';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const PlacePage = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(gql`
    {
      place(place_id: "${id}") {
        name
        photo
        address
        city
        categories
        heatmap {
          time
          value
        }
      }
    }
  `);

  return (
    <div className="PlacePage container">
      <Place
        loading={loading}
        data={data}
        error={error}
        onFavourite={handleOnFavourite}
        isFavourite={parseInt(2) === 2}
      />
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
