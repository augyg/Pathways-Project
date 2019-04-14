import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { login } from '../services/user';
import s from './styles.css';
import withStyles from 'isomorphic-style-loader/withStyles';

const App = ({ route }) => {
  return (
    <div style={s.body}>
      <Header/>
      {renderRoutes(route.routes)}
    </div>
  );
}

const loadData = (store) => {
  let authToken = store.getState().user.authToken;
  if(authToken) {
    return store.dispatch(login({authToken}))
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = {
  login
}

export default {
  component: withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(App)),
  loadData
}