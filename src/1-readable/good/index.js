import React, { Component } from 'react';

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      localCurrency: 'usd',
      inventory: {
        1: {
          product: 'Flashlight',
          img: '/flashlight.jpg',
          desc: 'A really great flashlight',
          price: 100,
          currency: 'usd',
        },
        2: {
          product: 'Tin can',
          img: '/tin_can.jpg',
          desc: 'Pretty much what you would expect from a tin can',
          price: 32,
          currency: 'usd',
        },
        3: {
          product: 'Cardboard Box',
          img: '/cardboard_box.png',
          desc: 'It holds things',
          price: 5,
          currency: 'usd',
        },
      },
    };
  }

  render() {
    return (
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
          {Object.keys(this.state.inventory).map(itemId => (
            <tr key={itemId}>
              <td>
                {this.state.inventory[itemId].product}
              </td>

              <td>
                <img src={this.state.inventory[itemId].img} alt="" />
              </td>

              <td>
                {this.state.inventory[itemId].desc}
              </td>

              <td>
                {this.state.inventory[itemId].price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
