import { combineReducers } from 'redux';
import cart from './cart';
import inventory from './inventory';
import currencies from './currencies';
import localCurrency from './local-currency';

export default combineReducers({
  cart,
  inventory,
  currencies,
  localCurrency,
});
