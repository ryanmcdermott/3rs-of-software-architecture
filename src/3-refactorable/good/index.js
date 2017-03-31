import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/app';

const store = createStore(reducer);

const RefactorableGood = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RefactorableGood;
