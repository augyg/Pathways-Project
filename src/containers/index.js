import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { login, logout } from '../services/user';
import { clearError } from '../services/error/actions';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {route, logout, user} = this.props;
    return (
      <div style={s.body}>
        <Header logout={logout} user={user}/>
        {renderRoutes(route.routes)}
      </div>
    );
  }
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
  login, logout, clearError
}

const connectedComponent = connect(mapStateToProps, 
  mapDispatchToProps)(App);

export default {
  component: withStyles(s)(connectedComponent),
  loadData
}