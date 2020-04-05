import React from 'react';
import { useParams } from 'react-router-dom';
import Place from '../components/place';
import Scheduler from '../components/scheduler';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

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
  
  const [setSlot] = useMutation(gql`
    mutation SetSlot($uuid: String!, $place_id: String!, $slotStart: Int!, $slotEnd: Int!) {
      setSlot(uuid: $uuid place_id: $place_id slotStart: $slotStart slotEnd: $slotEnd) {
        place_id
      }
    }
  `);
  
  const [setFavorite] = useMutation(gql`
    mutation SetFavorite($uuid: String!, $place_id: String!) {
      setFavorite(uuid: $uuid place_id: $place_id) {
        place_id
      }
    }
  `);

  return (
    <div className="PlacePage container">
      <Place
        loading={loading}
        data={data}
        error={error}
        onFavourite={(s,e) => {
          setFavorite({
            variables: {
              uuid: "x",
              place_id: id,
            }
          })
        }}
        isFavourite={parseInt(2) === 2}
      />
      <Scheduler onScheduleTime={(s,e) => {
        setSlot({ 
          variables: {
            uuid: "x",
            place_id: id,
            slotStart: s.getTime()/1000,
            slotEnd: e.getTime()/1000,
          }
        })
      }} />
    </div>
  );
};


const handleOnFavourite = uuid => {
  console.log('handleOnFavourite');
};

export default PlacePage;
