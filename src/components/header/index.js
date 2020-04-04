import React from 'react';

import './style.scss';
import Search from '../search';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__container container">
        <p className="Header__container__tagline">
          Let's fight the virus by reducing crowding in our society
        </p>
        <Search />
      </div>
    </div>
  );
};

export default Header;
