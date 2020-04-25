import React from 'react';
import PlacesView from '../components/places-list-view';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router';
import { useLocation } from '../location';

const CategoryPage = () => {
  const { id } = useParams();

  const NearbyPlacesView = props => {
    const loc = useLocation();
    const location = loc ? loc.coords.latitude+','+loc.coords.longitude : null;
    const { loading, data, error } = useQuery(gql`
      {
        nearby(
          location: "${location}"
          radius: 50000
          category: "${id}"
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

export default CategoryPage;
