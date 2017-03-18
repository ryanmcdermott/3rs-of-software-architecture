import React from 'react';
import { connect } from 'react-redux';

import CurrencyConverter from '../lib/CurrencyConverter';
import Cart from '../components/Cart';

const CartContainer = ({ cart, inventory, currencies, localCurrency }) => (
  <Cart
    cart={cart}
    currencyConverter={new CurrencyConverter(currencies)}
    localCurrency={localCurrency}
    inventory={inventory}
  />
);

const mapStateToProps = state => ({
  cart: state.cart,
  inventory: state.inventory,
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, {})(CartContainer);
