import React from 'react';

import './style.scss';

const mock = {
  '0600': 0,
  '0700': 12,
  '0800': 29,
  '0900': 38,
  '1000': 19,
  '1100': 20,
  '1200': 59,
  '1400': 2,
  '1500': 13,
  '1600': 4,
  '1700': 23,
  '1800': 55,
};

const Heatmap = ({ data = mock }) => {
  const max = Math.max(...Object.values(data));

  return (
    <div className="Heatmap">
      <div className="Heatmap__squares">
        {Object.values(data).map(value => (
          <Square value={value / max} />
        ))}
        <Legend hours={Object.keys(data)} />
      </div>
    </div>
  );
};

const Square = ({ value }) => (
  <div className="Square">
    <div className="Square__overlay" style={{ opacity: value }} />
  </div>
);

const Legend = () => <div className="Legend" />;

export default Heatmap;
