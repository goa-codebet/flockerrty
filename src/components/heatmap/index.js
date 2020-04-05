import React from 'react';

import './style.scss';

const mock = {
  '06': 0,
  '07': 12,
  '08': 29,
  '09': 38,
  '10': 19,
  '11': 20,
  '12': 59,
  '14': 2,
  '15': 13,
  '16': 4,
  '17': 23,
  '18': 55,
};

const Heatmap = ({ items }) => {
  const max = items.reduce((acc, item) => acc+item.value, 0)

  return (
    <div className="Heatmap">
      <div className="Heatmap__squares">
        {items.map(item => (
          <Square value={item.value / max} />
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
    {hours.map(hour => (
      <div className="Legend__hour">
        <span>{hour}</span>
      </div>
    ))}
  </div>
);

export default Heatmap;
