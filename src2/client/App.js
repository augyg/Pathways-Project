import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import style from '../Test.css';
import withStyles from 'isomorphic-style-loader/withStyles';

const App = ({ route }) => {
  return (
    <div className="app">
      <Header/>   
      <div className="app-body">
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}

const loadData = ({ dispatch }) => {
  //TODO: load initial user data from cookies
  //if(store.getState('auth')) {
  //  fetchUserData
  //}
  //return dispatch(fetchCurrentUser());
  return null;
};

export default {
  component: withStyles(style)(App),
  loadData
}