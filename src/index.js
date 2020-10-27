import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {   BrowserRouter as Router,
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

import App from './containers/App';

import createStore from './store';
const store = createStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider> 
  </Router>,
  document.getElementById('root')
);
