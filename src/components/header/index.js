import React from 'react';
import cn from 'classnames';

import './style.scss';
import Search from '../search';
import { useHistory, useParams } from 'react-router';

const Header = () => {
  const history = useHistory();
  const { q, id } = useParams();

  const hasParams = () => q || id;

  return (
    <div className="Header">
      <div className="Header__container container">
        <div className="Header__text">
          <i
            className={cn('Header__text__back fas fa-chevron-circle-left', {
              'Header__text__back--hide': hasParams(),
            })}
            onClick={() => history.goBack()}
          />
          <p
            className={cn('Header__text__tagline', {
              'Header__text__tagline--hide': !hasParams(),
            })}>
            Let's fight the virus by reducing crowding in our society
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
