import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }) => {
  return (
    <div>
      <Header/>
      {renderRoutes(route.routes)}
    </div>
  );
}

const loadData = ({ dispatch }) => {
  //return dispatch(fetchCurrentUser());
  return null;
};

export default {
  component: App,
  loadData
}