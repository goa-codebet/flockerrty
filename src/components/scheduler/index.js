import React from 'react';
import getDates from '../../utils/get-dates';

import './style.scss';

const Scheduler = ({
  start = new Date(),
  SAME_DATA_AS_HEAT_MAP,
  onBookTime,
}) => {
  const diff = 1000 * 60 * 60;
  const bookingTimes = getDates({ start: new Date() });

  return (
    <div className="Scheduler">
      {bookingTimes.map(b => (
        <div
          className="Scheduler__item"
          key={b.getTime()}
          onClick={() => onBookTime(b)}>
          {timeLabel(b)} - {timeLabel(new Date(b.getTime() + diff))}
        </div>
      ))}
    </div>
  );
};

const timeLabel = date =>
  `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

export default Scheduler;
