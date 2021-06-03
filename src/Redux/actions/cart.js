import { ADD_PIZZA_CART, CLEAR_CART, REMOVE_PIZZA } from '../types/types';

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: REMOVE_PIZZA,
  payload: id
});


