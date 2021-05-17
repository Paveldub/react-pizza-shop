import { SET_PIZZAS } from '../types/types';

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
