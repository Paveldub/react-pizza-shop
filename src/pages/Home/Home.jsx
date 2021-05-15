import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../../components';

const Home = ({items}) => {

 
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['Популярности', 'Цене', 'Алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => {
          return (
            <PizzaBlock
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              sizes={item.sizes}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default Home;
