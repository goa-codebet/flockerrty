import React from 'react';

import './style.scss';
import Search from '../search';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__container__tagline">
          Let's fight the virus by reducing crowding in our society
        </p>
        <Search />
      </div>
    </div>
  );
}
