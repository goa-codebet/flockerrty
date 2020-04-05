import React from 'react';
import TabView from '../components/tab-view';
import PlacesView from '../components/places-list-view';
import PlaceholderImage from '../images/placeholder.png';
import Slider from '../components/slider';

const latestPlaces = [
  {
    thumbnail: PlaceholderImage,
    name: 'ICA Maxi',
    city: 'Kalmar',
    hours: '6-23',
  },
  {
    thumbnail: PlaceholderImage,
    name: 'Stora Coop',
    city: 'Kalmar',
    hours: '6-23',
  },
  {
    thumbnail: PlaceholderImage,
    name: 'Lidl Mat å sånt',
    city: 'Lenhovda',
    hours: '7-21',
  },
  {
    thumbnail: PlaceholderImage,
    name: 'Willys',
    city: 'Kalmar',
    hours: '8-20',
  },
];

const tabViews = [
  {
    label: 'Latest',
    component: <PlacesView items={latestPlaces} />,
  },
  {
    label: 'Favourites',
    component: <h2>Favourites</h2>,
  },
  {
    label: 'Nearby',
    component: <h2>Nearby</h2>,
  },
];

export default function IndexPage() {
  return (
    <div>
      <TabView views={tabViews} />
      <Slider />
    </div>
  );
}
