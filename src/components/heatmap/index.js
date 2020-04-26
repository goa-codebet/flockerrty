import React from 'react';
import { getDates, timeLabel } from '../../utils/slots';

import './style.scss';

const Heatmap = ({ items }) => {
  const total = items.reduce((acc, item) => acc+item.value, 0)
  const max = Math.max(...items.map(i => i.value))

  return (
    <div className="Heatmap">
      <div className="Heatmap__squares">
        {items.map(item => (
          <Square value={max > 0 ? item.value / max : 0} key={`square-${item.time}`} />
        ))}
      </div>
      <Legend hours={items.map(item => item.time)} />
    </div>
  );
};

const Square = ({ value }) => (
  <div className="Square">
    <div className="Square__overlay" style={{ opacity: value }} />
  </div>
);

const Legend = ({ hours }) => (
  <div className="Legend">
    {hours.map((hour, i) => (
      <div className="Legend__hour" key={`${hour}-${i}`}>
        <span>{hour}</span>
      </div>
    ))}
  </div>
);

export default Heatmap;
