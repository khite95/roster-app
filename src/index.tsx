import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './helpers';
import * as serviceWorker from './serviceWorker';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

//serviceWorker.unregister();

// Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
// }
