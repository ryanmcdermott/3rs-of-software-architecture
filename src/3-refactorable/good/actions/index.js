import * as types from '../constants/ActionTypes';

export const addToCartAction = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const changeCurrencyAction = currency => ({
  type: types.CHANGE_CURRENCY,
  currency,
});
