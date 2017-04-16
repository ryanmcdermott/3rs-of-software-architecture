import React from 'react';
import { connect } from 'react-redux';
import { changeCurrencyAction } from '../actions';
import CurrencySelector from '../components/currency-selector';

const CurrencySelectorContainer = ({ localCurrency, changeCurrency }) => (
  <CurrencySelector
    localCurrency={localCurrency}
    changeCurrency={currency => changeCurrency(currency)}
  />
);

CurrencySelectorContainer.propTypes = {
  changeCurrency: React.PropTypes.func.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, {
  changeCurrency: changeCurrencyAction,
})(CurrencySelectorContainer);
