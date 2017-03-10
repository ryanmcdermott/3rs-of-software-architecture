import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import addToCart from '../actions';

import CurrencyConverter from '../lib/CurrencyConverter';
import Cart from '../components/Cart';

const CartContainer = ({ cart, addToCart }) => (
  <Cart
    cart={cart}
    currencyConverter={new CurrencyConverter(window.currencyConversions)}
    inventory={window.inventory}
    addToCart={productId => addToCart(productId)}
  />
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(CartContainer);
