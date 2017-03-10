import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import addToCart from '../actions';

import CurrencyConverter from '../lib/CurrencyConverter';
import Inventory from '../components/Inventory';

const InventoryContainer = ({ addToCart }) => (
  <Inventory
    currencyConverter={new CurrencyConverter(window.currencyConversions)}
    inventory={window.inventory}
    addToCart={productId => addToCart(productId)}
  />
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addToCart })(InventoryContainer);
