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
                {item.price}
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Inventory;
