import { combineReducers } from 'redux';
import cart from './cart';
import inventory from './inventory';
import currencies from './currencies';
import localCurrency from './localCurrency';

export default combineReducers({
  cart,
  inventory,
  currencies,
  localCurrency,
});
