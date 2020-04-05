import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Header from '../components/header';
import TabView from '../components/tab-view';
import PlacesView from '../components/places-view';
import PlaceholderImage from '../images/placeholder.png';
import Slider from '../components/slider';

const NearbyPlacesView = props => {
  const { loading, data, error } = useQuery(gql`{
    nearby(location:"56.6702937,16.2976897" radius: 50000 category:"supermarket") {
      name
      city
      photo
      heatmap
      place_id
    }
  }`);
  return <PlacesView { ...props } loading={loading} error={error} data={data ? data.nearby : []} />
}

const LatestPlacesView = props => {
  const { loading, data, error } = useQuery(gql`{
    latest(uuid: "x") {
      name
      city
      photo
      heatmap
      place_id
    }
  }`);
  return <PlacesView { ...props } loading={loading} error={error} data={data ? data.latest : []} />
}

const FavoritePlacesView = props => {
  const { loading, data, error } = useQuery(gql`{
    favorites(uuid: "x") {
      name
      city
      photo
      heatmap
      place_id
    }
  }`);
  return <PlacesView { ...props } loading={loading} error={error} data={data ? data.favorites : []} />
}

const tabViews = [
  {
    label: 'Latest',
    component: <LatestPlacesView />,
  },
  {
    label: 'Favourites',
    component: <FavoritePlacesView />,
  },
  {
    label: 'Nearby',
    component: <NearbyPlacesView />,
  },
];

export default function IndexPage() {
  return (
    <div>
      <Header />
      <TabView views={tabViews} />
      <Slider />
    </div>
  );
}
