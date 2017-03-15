import { combineReducers } from 'redux';
import cart from './cart';
import inventory from './inventory';
import currencies from './currencies';

export default combineReducers({
  cart,
  inventory,
  currencies,
});
