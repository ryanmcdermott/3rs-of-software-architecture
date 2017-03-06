import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      localCurrency: props.localCurrency,
      inventory: props.inventory,
    };

    this.CurrencyConverter = props.currencyConverter;
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th>
                Product
              </th>

              <th>
                Price
              </th>
            </tr>
            {this.state.inventory.map((item, idx) => (
              <tr key={idx}>
                <td>
                  {item.product}
                </td>

                <td>
                  {this.CurrencyConverter.convert(
                    item.price,
                    item.currency,
                    this.state.localCurrency,
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
