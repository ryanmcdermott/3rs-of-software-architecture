import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import Inventory from '../components/Inventory';
import Cart from '../components/Cart';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Inventory />
        <Cart />
      </div>
    );
  }
}
