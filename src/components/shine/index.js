import React from 'react';
import cn from 'classnames';
import './style.scss';

export const ShineRect = ({ width, height, error }) => 
  <div className={cn('Shine', {
    'Shine--error': error
  })} style={{ width, height }} />
  
export const ShineCircle = ({ width, height, error }) => 
  <div className={cn('Shine Shine--circle', {
    'Shine--error': error
  })} style={{ width, height }} />
