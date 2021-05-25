import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../Redux/actions/filters';
import { Categories, SortPopup, PizzaBlock } from '../../components';
import { fetchPizzas } from '../../api/api';
import { Loader } from '../../components/PizzaBlock/PizzaLoader';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'Популярности', type: 'popular' },
  { name: 'Цене', type: 'price' },
  { name: 'Алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  console.log(isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => {
              return <PizzaBlock key={item.id} {...item} isLoading={true} />;
            })
          : Array(10).fill(<Loader />)}
      </div>
    </div>
  );
};

export default Home;
