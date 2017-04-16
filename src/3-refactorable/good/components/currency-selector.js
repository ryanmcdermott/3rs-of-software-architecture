import React, { Component } from 'react';

class CurrencySelector extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      localCurrency: props.localCurrency.currency,
    };

    this.changeCurrency = props.changeCurrency;
  }

  onSelectCurrency(e) {
    const currency = e.target.value;

    this.changeCurrency(currency);

    this.setState({
      localCurrency: currency,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="currencySelector">Currency:</label>
        <select
          className="u-full-width"
          id="currencySelector"
          onChange={this.onSelectCurrency.bind(this)}
          value={this.state.localCurrency}
        >
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  changeCurrency: React.PropTypes.func.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
};

export default CurrencySelector;
