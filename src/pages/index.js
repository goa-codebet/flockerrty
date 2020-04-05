import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import TabView from '../components/tab-view';
import PlacesView from '../components/places-list-view';
import Slider from '../components/slider';
import TagList from '../components/tag-list';

const NearbyPlacesView = props => {
  const { loading, data, error } = useQuery(gql`
    {
      nearby(
        location: "56.6702937,16.2976897"
        radius: 50000
        category: "supermarket"
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

const LatestPlacesView = props => {
  const { loading, data, error } = useQuery(gql`
    {
      latest(uuid: "x") {
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
      data={data ? data.latest : []}
    />
  );
};

const FavoritePlacesView = props => {
  const { loading, data, error } = useQuery(gql`
    {
      favorites(uuid: "x") {
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
      data={data ? data.favorites : []}
    />
  );
};

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
      <TabView views={tabViews} />
      <Slider items={categories} />
      <TagList tags={tags} />
    </div>
  );
}
