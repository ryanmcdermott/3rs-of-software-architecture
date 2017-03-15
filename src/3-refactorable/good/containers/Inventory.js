import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

import CurrencyConverter from '../lib/CurrencyConverter';
import Inventory from '../components/Inventory';

const InventoryContainer = ({ inventory, currencies, addToCart }) => (
  <Inventory
    currencyConverter={new CurrencyConverter(currencies)}
    inventory={inventory}
    addToCart={productId => addToCart(productId)}
  />
);

const mapStateToProps = state => ({
  inventory: state.inventory,
  currencies: state.currencies,
});

export default connect(mapStateToProps, { addToCart })(InventoryContainer);
