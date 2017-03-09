import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super();

    this.CurrencyConverter = props.currencyConverter;
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        {this.state.cart.length === 0
          ? <p>Nothing in the cart</p>
          : <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th>
                    Product
                  </th>

                <th>
                    Price
                  </th>
              </tr>
              {this.state.cart.map((itemId, idx) => (
                <tr key={idx}>
                  <td>
                    {this.state.inventory[itemId].product}
                  </td>

                  <td>
                    {this.CurrencyConverter.convert(
                        this.state.inventory[itemId].price,
                        this.state.inventory[itemId].currency,
                        this.state.localCurrency,
                      )}
                  </td>
                </tr>
                ))}
            </tbody>
          </table>}
      </div>
    );
  }
}
