import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer);

export default class RefactorableGood extends Component {
  constructor(props) {
    super();

    window.localCurrency = 'usd';
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
