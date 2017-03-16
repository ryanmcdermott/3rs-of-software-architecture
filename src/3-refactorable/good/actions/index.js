import * as types from '../constants/ActionTypes';

export const addToCart = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const changeCurrency = currency => ({
  type: types.CHANGE_CURRENCY,
  currency,
});
