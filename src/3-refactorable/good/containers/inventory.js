import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions';

import CurrencyConverter from '../lib/currency-converter';
import Inventory from '../components/inventory';

const InventoryContainer = (
  {
    inventory,
    currencies,
    localCurrency,
    addToCart,
  },
) => (
  <Inventory
    currencyConverter={new CurrencyConverter(currencies)}
    inventory={inventory}
    localCurrency={localCurrency}
    addToCart={productId => addToCart(productId)}
  />
);

InventoryContainer.propTypes = {
  currencies: React.PropTypes.object.isRequired,
  inventory: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
  addToCart: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  inventory: state.inventory,
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, {
  addToCart: addToCartAction,
})(InventoryContainer);
