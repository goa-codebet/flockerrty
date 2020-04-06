import React from 'react';
import cn from 'classnames';
import getDates from '../../utils/get-dates';

import './style.scss';

const Scheduler = ({
  start = new Date(),
  heatmap = [],
  loading,
  onScheduleTime,
}) => {
  
  if (loading) 
    return null;
  
  const diff = 1000 * 60 * 60;
  const bookingTimes = getDates({ start });
  const max = heatmap.reduce((acc, item) => acc+item.value, 0)

  return (
    <div className="Scheduler">
      {heatmap.map((item, i) => {
        const time = bookingTimes[i];
        return (
          <div
            className={cn('Scheduler__item shadow', {
              'Scheduler__item--closed': false,
              'Scheduler__item--selected': false,
            })}
            key={time.getTime()}
            onClick={() => onScheduleTime(time, new Date(time.getTime() + diff))}>
            <div className="Scheduler__item__bg" style={{opacity:max > 0 ? item.value / max : 0}} />
            {timeLabel(time)} - {timeLabel(new Date(time.getTime() + diff))}
          </div>
        )
      })}
    </div>
  );
};

const timeLabel = date =>
  `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

export default Scheduler;
