import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import {renderRoutes} from 'react-router-config';
import {composeWithDevTools} from 'redux-devtools-extension';

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);