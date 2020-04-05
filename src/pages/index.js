import React from 'react';
import Header from '../components/header';
import TabView from '../components/tab-view';
import PlacesView from '../components/places-view';
import PlaceholderImage from '../images/placeholder.png';
import Slider from '../components/slider';
import TagList from '../components/tag-list';

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

const tags = [
  {
    label: 'Nybro',
    link: '/place/123',
  },
  {
    label: 'Trekanten',
    link: '/place/123',
  },
  {
    label: 'Alstermo',
    link: '/place/123',
  },
  {
    label: 'Emmaboda',
    link: '/place/123',
  },
  {
    label: 'Oskarshamn',
    link: '/place/123',
  },
  {
    label: 'Torsås',
    link: '/place/123',
  },
];

const categories = [
  {
    label: 'Food stores',
    link: '/category/123',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Public library',
    link: '/category/123',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Bank',
    link: '/category/123',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Store',
    link: '/category/123',
    imageUri: 'http://placekitten.com/g/100/100',
  },
];

export default function IndexPage() {
  return (
    <div>
      <Header />
      <TabView views={tabViews} />
      <Slider items={categories} />
      <TagList tags={tags} />
    </div>
  );
}
