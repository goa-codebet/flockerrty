import React, { useState } from 'react';
import cn from 'classnames';
import { getDates, timeLabel } from '../../utils/slots';

import './style.scss';

const Scheduler = ({
  start = new Date(),
  heatmap = [],
  loading,
  onScheduleTime,
  setSlotData,
  setSlotLoading,
}) => {
  const [selected, setSelected] = useState(null)
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
              'Scheduler__item--selected': selected && selected.getTime() === time.getTime(),
              'Scheduler__item--loading': selected && selected.getTime() === time.getTime() && setSlotLoading,
            })}
            key={time.getTime()}
            onClick={() => {setSelected(time);onScheduleTime(time, new Date(time.getTime() + diff))}}>
            <div className="Scheduler__item__bg" style={{opacity:max > 0 ? item.value / max : 0}} />
            {timeLabel(time)} - {timeLabel(new Date(time.getTime() + diff))}
          </div>
        )
      })}
    </div>
  );
};

export default Scheduler;
