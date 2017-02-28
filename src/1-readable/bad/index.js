import React, { Component } from 'react';

class inventory extends Component
{
  constructor() {
    super();
    this.state =
    {
      i: [
        {
          product: 'Flashlight',
          img: '/flashlight.jpg',
          desc: "A really great flashlight",
          price: 100,
          c: 'usd'
        },
        {
          product: 'Tin can',
          img: '/tin_can.jpg',
          desc: "Pretty much what you would expect from a tin can",
          price: 32,
          c: 'usd'
        },
        {
          product: 'Cardboard Box',
          img: '/cardboard_box.png',
          desc: "It holds things",
          price: 5,
          c: 'usd'
        }
      ]
    }
  }

  curConv(am, fC, tC)
  {
    var c = [
      {
        usd:
        {
          rupee: 66.78,
          yuan: 6.87,
        },
        yuan: {
          usd: 0.15,
          rupee: 9.72,
        },
        rupee: {
          yuan: .10,
          usd: .015,
        },
      }
    ];


    return am * c[fC][tC];
  }

  render () {
    return (
      <table style={{width: '100%'}}>
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
        {this.state.i.map(function(item, i) {
          return (
            <tr>
              <td>
                {item.product}
              </td>

              <td>
                <img src={item.img} alt=""/>
              </td>

              <td>
                {item.desc}
              </td>

              <td>
                {item.price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
  }
}

export default inventory;
