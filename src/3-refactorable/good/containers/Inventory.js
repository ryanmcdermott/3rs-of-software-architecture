import React from 'react';
import { connect } from 'react-redux';
import { addToCart, changeCurrency } from '../actions';

import CurrencyConverter from '../lib/CurrencyConverter';
import Inventory from '../components/Inventory';

const InventoryContainer = ({ inventory, currencies, localCurrency, addToCart, changeCurrency }) => (
  <Inventory
    currencyConverter={new CurrencyConverter(currencies)}
    inventory={inventory}
    localCurrency={localCurrency}
    changeCurrency={currency => changeCurrency(currency)}
    addToCart={productId => addToCart(productId)}
  />
);

const mapStateToProps = state => ({
  inventory: state.inventory,
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, { addToCart, changeCurrency })(InventoryContainer);
