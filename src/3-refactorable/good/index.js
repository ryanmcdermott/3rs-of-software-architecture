import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer);

export default class RefactorableGood extends Component {
  constructor(props) {
    super();

    // Most likely we would fetch this from an external source if this were a real app
    window.currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };

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
