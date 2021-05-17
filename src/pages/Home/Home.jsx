import React from 'react';
import { useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../../components';

const Home = () => {
  
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'Популярности', type: 'popular' },
            { name: 'Цене', type: 'price' },
            { name: 'Алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((item) => {
            return <PizzaBlock key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
