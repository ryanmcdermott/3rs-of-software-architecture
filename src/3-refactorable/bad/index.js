import React, { Component } from 'react';
import CurrencyConverter from './CurrencyConverter';
import Inventory from './Inventory';

export default class RefactorableBad extends Component {
  constructor() {
    super();

    this.inventory = [
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
    ];

    // Most likely we would fetch this from an external source if this were a real app
    this.currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };
  }

  render() {
    return (
      <Inventory
        inventory={this.inventory}
        currencyConverter={new CurrencyConverter(this.currencyConversions)}
        localCurrency="usd"
      />
    );
  }
}
