import React, { useState } from 'react';

const Categories = ({ items, onClickItem }) => {

  const [activeItem, setActiveItem] = useState(null);

  const activeItemHandler = (index) => {
    setActiveItem(index);
  }
  
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => activeItemHandler(null)}
        >
          Все
        </li>
        {items && items.map((name, index) => {
          return (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => activeItemHandler(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
 