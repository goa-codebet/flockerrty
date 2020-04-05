import React, { useState } from 'react';
import cn from 'classnames';

import './style.scss';

const TabView = ({ views }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="TabView">
      <div className="TabView__menu">
        {views.map((m, i) => (
          <div
            className={cn('TabView__menu__item', {
              'TabView__menu__item--active': activeTabIndex === i,
            })}
            onClick={() => setActiveTabIndex(i)}
            key={`${m.label}-${i}`}>
            {m.label}
          </div>
        ))}
      </div>
      <div className="TabView__component">
        {views[activeTabIndex].component}
      </div>
    </div>
  );
};

export default TabView;
