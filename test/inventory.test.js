import React from 'react';
import { shallow } from 'enzyme';
import Inventory from '../src/3-refactorable/good/components/inventory';

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
  },
  addToCart: jest.fn(),
  changeCurrency: jest.fn(),
  currencyConverter: {
    convert: jest.fn(),
  },
};

it('should render Inventory without crashing', () => {
  const inventoryComponent = shallow(<Inventory {...props} />);
  expect(inventoryComponent);
});

it('should show all inventory data in table', () => {
  props.currencyConverter.convert = function () {
    return `$${props.inventory[1].price}`;
  };

  const inventoryComponent = shallow(<Inventory {...props} />);
  let tr = inventoryComponent.find('tr');
  expect(tr.length).toEqual(2);

  let td = inventoryComponent.find('td');
  let product = td.at(0);
  let image = td.at(1);
  let desc = td.at(2);
  let price = td.at(3);

  expect(product.text()).toEqual('Flashlight');
  expect(image.html()).toEqual('<td><img src="/flashlight.jpg" alt=""/></td>');
  expect(desc.text()).toEqual('A really great flashlight');
  expect(price.text()).toEqual('$100');
});

it('should have Add to Cart button work', () => {
  const inventoryComponent = shallow(<Inventory {...props} />);
  let addToCartBtn = inventoryComponent.find('button').first();
  addToCartBtn.simulate('click');
  expect(props.addToCart).toBeCalled();
});
