import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const activeItemHandler = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => activeItemHandler(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                onClick={() => activeItemHandler(index)}
                className={activeItem === index ? 'active' : ''}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
