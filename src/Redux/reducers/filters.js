const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filters;