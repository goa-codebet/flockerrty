import React from 'react';
import CategoryBar from '../category-bar';

import './style.scss';
import TagListItem from './tag-list-item';

const TagList = ({ tags }) => {
  return (
    <div className="Tag-list container section">
      <CategoryBar category="Near by" link="See all" />
      <div className="Tag-list__items">
        {tags &&
          tags.map((tag, i) => (
            <TagListItem
              label={tag.label}
              link={tag.link}
              key={`${tag.link}-${i}`}
            />
          ))}
      </div>
    </div>
  );
};

export default TagList;
