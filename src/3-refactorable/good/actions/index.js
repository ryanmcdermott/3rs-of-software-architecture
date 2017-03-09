import * as types from '../constants/ActionTypes';

export const addToCart = productId => (dispatch, getState) => {
  dispatch({
    type: types.ADD_TO_CART,
    productId,
  });
};
