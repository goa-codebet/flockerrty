import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ background, label, link }) => {
  return (
    <div className="Slider__item">
      <Link to={link} className="Slider__item__link">
        <div
          className="Slider__item__inner shadow"
          style={{ backgroundImage: `url('${background}')` }}>
          <span className="Slider__item__label">{label}</span>
        </div>
      </Link>
    </div>
  );
};

export default SliderItem;
