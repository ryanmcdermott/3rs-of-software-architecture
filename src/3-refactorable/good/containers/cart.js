import React from 'react';
import { connect } from 'react-redux';

import CurrencyConverter from '../lib/currency-converter';
import Cart from '../components/cart';

const CartContainer = ({ cart, inventory, currencies, localCurrency }) => (
  <Cart
    cart={cart}
    currencyConverter={new CurrencyConverter(currencies)}
    localCurrency={localCurrency}
    inventory={inventory}
  />
);

CartContainer.propTypes = {
  currencies: React.PropTypes.object.isRequired,
  cart: React.PropTypes.array.isRequired,
  inventory: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  inventory: state.inventory,
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, {})(CartContainer);
