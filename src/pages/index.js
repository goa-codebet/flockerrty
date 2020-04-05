import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import TabView from '../components/tab-view';
import PlacesView from '../components/places-list-view';
import Slider from '../components/slider';
import TagList from '../components/tag-list';
import EmptyResults from '../components/empty-results';

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
  return data && data.latest && data.latest.length > 0 ? (
    <PlacesView
      {...props}
      loading={loading}
      error={error}
      data={data ? data.latest : []}
    />
  ) : (
    <EmptyResults />
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
  return data && data.favorites && data.favorites.length > 0 ? (
    <PlacesView
      {...props}
      loading={loading}
      error={error}
      data={data ? data.favorites : []}
    />
  ) : (
    <EmptyResults />
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
    link: '/location/56.744821, 15.908595',
  },
  {
    label: 'Växjö',
    link: '/location/56.881060, 14.806844',
  },
  {
    label: 'Borgholm',
    link: '/location/56.880515, 16.656376',
  },
  {
    label: 'Emmaboda',
    link: '/location/56.630249, 15.539332',
  },
  {
    label: 'Oskarshamn',
    link: '/location/57.266057, 16.447072',
  },
  {
    label: 'Torsås',
    link: '/location/56.412667, 15.998298',
  },
];

const categories = [
  {
    label: 'Hospitals',
    link: '/category/hospital',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Food stores',
    link: '/category/grocery_or_supermarket',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Pharmacies',
    link: '/category/pharmacy',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Libraries',
    link: '/category/library',
    imageUri: 'http://placekitten.com/g/100/100',
  },
  {
    label: 'Convenience stores',
    link: '/category/convenience_store',
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
