import axios from 'axios';
import { setPizzas } from '../Redux/actions/pizzas';

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};
