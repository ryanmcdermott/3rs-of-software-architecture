import React, { Component } from 'react';

class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      localCurrency: 'usd',
      inventory: [
        {
          product: 'Flashlight',
          img: '/flashlight.jpg',
          desc: 'A really great flashlight',
          price: 100,
          currency: 'usd',
        },
        {
          product: 'Tin can',
          img: '/tin_can.jpg',
          desc: 'Pretty much what you would expect from a tin can',
          price: 32,
          currency: 'usd',
        },
        {
          product: 'Cardboard Box',
          img: '/cardboard_box.png',
          desc: 'It holds things',
          price: 5,
          currency: 'usd',
        },
      ],
    };
  }

  convertCurrency(amount, fromCurrency, toCurrency) {
    let currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };

    let currencySymbols = {
      usd: '$',
      rupee: '₹',
      yuan: '元',
    };

    return currencySymbols[toCurrency] + amount * currencyConversions[fromCurrency][toCurrency];
  }

  onSelectCurrency(e) {
    this.setState({
      localCurrency: e.target.value,
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
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th>
                Product
              </th>

              <th>
                Image
              </th>

              <th>
                Description
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
                  <img src={item.img} alt="" />
                </td>

                <td>
                  {item.desc}
                </td>

                <td>
                  {this.convertCurrency(item.price, item.currency, this.state.localCurrency)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inventory;
