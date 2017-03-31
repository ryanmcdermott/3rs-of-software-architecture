import { ADD_TO_CART } from '../constants/action-types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, parseInt(action.productId, 10)];
    default:
      return state;
  }
};
