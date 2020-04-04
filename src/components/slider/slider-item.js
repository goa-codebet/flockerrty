import React from 'react';

const SliderItem = ({ background, label }) => {
  return (
    <div
      className="Slider__item shadow"
      style={{ backgroundImage: `url('${background}')` }}>
      <div className="Slider__item__inner">
        <span className="Slider__item__label">{label}</span>
      </div>
    </div>
  );
};

export default SliderItem;
