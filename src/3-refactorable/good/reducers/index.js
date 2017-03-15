import { combineReducers } from 'redux';
import cart from './cart';
import inventory from './inventory';

export default combineReducers({
  cart,
  inventory,
});
