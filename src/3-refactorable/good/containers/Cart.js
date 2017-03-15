import React from 'react';
import { connect } from 'react-redux';

import CurrencyConverter from '../lib/CurrencyConverter';
import Cart from '../components/Cart';

const CartContainer = ({ cart, inventory }) => (
  <Cart
    cart={cart}
    currencyConverter={new CurrencyConverter(window.currencyConversions)}
    localCurrency={window.localCurrency}
    inventory={inventory}
  />
);

const mapStateToProps = state => ({
  cart: state.cart,
  inventory: state.inventory,
});

export default connect(mapStateToProps, {})(CartContainer);
