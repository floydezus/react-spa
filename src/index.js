import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyTable from './components/MyTable.js';
import '../src/css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '../src/css/main.css';

ReactDOM.render(<MyTable />, document.querySelector('#app'));