import React from 'react';
import CategoryBar from '../category-bar';

import './style.scss';
import SliderItem from './slider-item';

const Slider = ({ items }) => {
  return (
    <div className="Slider section container">
      <CategoryBar category="By Categories" link="See all" />

      <div className="Slider__track">
        {items &&
          items.map((item, i) => (
            <SliderItem
              background={item.imageUri}
              label={item.label}
              link={item.link}
              key={`${item.link}-${i}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Slider;
