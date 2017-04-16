import React from 'react';

import Inventory from './inventory';
import Cart from './cart';
import CurrencySelector from './currency-selector';

const App = () => (
  <div>
    <CurrencySelector />
    <Inventory />
    <Cart />
  </div>
);

export default App;
