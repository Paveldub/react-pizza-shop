import { SET_PIZZAS, SET_LOADED } from '../types/types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
});

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
