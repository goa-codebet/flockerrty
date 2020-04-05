import React from 'react';
import PlacesView from '../components/places-list-view';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router';

const LocationPage = () => {
  const { id } = useParams();

  const NearbyPlacesView = props => {
    const { loading, data, error } = useQuery(gql`
      {
        nearby(
          location: "${id}"
          radius: 5000
        ) {
          name
          city
          photo
          heatmap {
            time
            value
          }
          place_id
        }
      }
    `);
    return (
      <PlacesView
        {...props}
        loading={loading}
        error={error}
        data={data ? data.nearby : []}
      />
    );
  };

  return (
    <div>
      <NearbyPlacesView />
    </div>
  );
};

export default LocationPage;
