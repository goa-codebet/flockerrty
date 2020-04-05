import React from 'react';
import { useParams } from 'react-router';
import PlacesView from '../components/places-list-view';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const SearchPage = () => {
  const { q } = useParams();

  const NearbyPlacesView = props => {
    const { loading, data, error } = useQuery(gql`
      {
        nearby(
          location: "56.6702937,16.2976897"
          radius: 50000
          category: "supermarkets"
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

export default SearchPage;
