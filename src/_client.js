import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './services/reducers';
import {renderRoutes} from 'react-router-config';
import {composeWithDevTools} from 'redux-devtools-extension';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

delete window.INITIAL_STATE;

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <StyleContext.Provider value={{insertCss}}>
        <div>{renderRoutes(Routes)}</div>
      </StyleContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
); 
