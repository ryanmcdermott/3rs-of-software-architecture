import React from 'react';
import { shallow } from 'enzyme';
import Inventory from '../src/3-refactorable/good/components/Inventory';

const props = {
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
  addToCart: jest.fn(),
  changeCurrency: jest.fn(),
  currencyConverter: {
    convert: jest.fn(),
  },
};

it('should render Inventory', () => {
  const inventoryComponent = shallow(<Inventory {...props} />);
});
