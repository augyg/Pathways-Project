import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './Routes';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import reducers from './services/reducers';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use('/api', proxy('http://localhost:3001'))
app.use(express.static('public'));
app.get('*', (req, res) => {
  const authToken = (req.cookies) ? req.cookies['authToken'] : undefined;
  const store = initializeStore(req, { user: { authToken } });
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
})

app.listen('3000', () => {
  console.log('Listening on port 3000');
})

function initializeStore(req, initialState = {}) {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { cookie: req.get('cookie') || '' }
  })
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
}