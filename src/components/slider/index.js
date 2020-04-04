import React from 'react';
import CategoryBar from '../category-bar';

import './style.scss';
import SliderItem from './slider-item';

const Slider = () => {
  return (
    <div className="Slider container">
      <CategoryBar category="By Categories" link="See all" />
      <div className="Slider__track">
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Farmacy"
        />
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Food stores"
        />
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Public library"
        />
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Bank"
        />
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Bank"
        />
        <SliderItem
          background="http://placekitten.com/g/100/100"
          label="Store"
        />
      </div>
    </div>
  );
};

export default Slider;
