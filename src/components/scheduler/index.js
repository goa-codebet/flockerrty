import React from 'react';
import getDates from '../../utils/get-dates';

import './style.scss';

const Scheduler = ({ start = new Date(), SAME_DATA_AS_HEAT_MAP }) => {
  const bookingTimes = getDates({ start: new Date() });

  console.log(bookingTimes);

  return (
    <div className="Scheduler">
      {bookingTimes.map(b => (
        <div className="Scheduler__item">
          {timeLabel(b)} - {timeLabel(new Date(b.getTime() + 1000 * 60 * 30))}
        </div>
      ))}
    </div>
  );
};

const timeLabel = date =>
  `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

export default Scheduler;
