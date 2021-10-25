import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';

import '../src/css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '../src/css/main.css';

const store = createStore(
    reducers,
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);