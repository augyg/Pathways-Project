import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }) => {
  return (
    <div className='App'>
      <Header/>
      {renderRoutes(route.routes)}
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
  component: App,
  loadData
}