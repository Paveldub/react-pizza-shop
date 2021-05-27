import axios from 'axios';
import { setPizzas, setLoaded } from '../Redux/actions/pizzas';

export const fetchPizzas = (sortBy, category) => (dispatch) => {

  dispatch(setLoaded(false));

  axios
    .get(
      `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
