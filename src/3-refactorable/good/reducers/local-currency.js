import { CHANGE_CURRENCY } from '../constants/action-types';

const initialState = 'usd';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};
