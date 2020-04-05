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

const Heatmap = ({ data = mock }) => {
  const hours = Object.keys(data).sort();
  const people = hours.map(hour => mock[hour]);
  const max = Math.max(...people);

  return (
    <div className="Heatmap">
      <div className="Heatmap__squares">
        {people.map(value => (
          <Square value={value / max} />
        ))}
      </div>
      <Legend hours={hours} />
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
      <div className="Legend__hour">{hour}</div>
    ))}
  </div>
);

export default Heatmap;
