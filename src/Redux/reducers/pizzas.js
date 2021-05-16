const initialState = {
  items: [],
  isLoaded: false
};

const pizzas = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default pizzas;
