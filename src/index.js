import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './helpers';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
