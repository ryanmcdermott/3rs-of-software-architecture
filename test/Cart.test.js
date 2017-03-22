import React from 'react';
import { shallow } from 'enzyme';
import Cart from '../src/3-refactorable/good/components/Cart';

const props = {
  localCurrency: 'usd',
  cart: [1, 1],
  inventory: {
    1: {
      product: 'Flashlight',
      img: '/flashlight.jpg',
      desc: 'A really great flashlight',
      price: 100,
      currency: 'usd',
    },
  },
  currencyConverter: {
    convert: jest.fn(),
  },
};

it('should render Cart without crashing', () => {
  const cartComponent = shallow(<Cart {...props} />);
  expect(cartComponent);
});

it('should show all cart data in cart table', () => {
  props.currencyConverter.convert = function () {
    return `$${props.inventory[1].price}`;
  };

  const cartComponent = shallow(<Cart {...props} />);
  let tr = cartComponent.find('tr');
  expect(tr.length).toEqual(3);

  props.cart.forEach((item, idx) => {
    let td = cartComponent.find('td');
    let product = td.at(2 * idx);
    let price = td.at(2 * idx + 1);

    expect(product.text()).toEqual(props.inventory[item].product);
    expect(price.text()).toEqual(props.currencyConverter.convert());
  });
});
