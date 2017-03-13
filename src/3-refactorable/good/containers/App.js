import React, { Component } from 'react';

import Inventory from '../containers/Inventory';
import Cart from '../containers/Cart';

export default class App extends Component {
  render() {
    return (
      <div>
        <Inventory />
        <Cart />
      </div>
    );
  }
}
