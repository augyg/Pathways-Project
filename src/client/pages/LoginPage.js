import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData, releaseUserData } from '../actions/userActions';

class LoginPage extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  renderLoggedIn() {
    return this.props.user ? (
      <div>
        <p>{this.props.user.name} is logged in.</p>
        <button onClick={() => this.props.releaseUserData()}>Log out!</button>
      </div>    
    ) : (
      <div>
        <p>There is no account logged in.</p>
        <button onClick={() => this.props.fetchUserData()}>Log in!</button>
      </div>   
    )
  }

  render() {
    return (
      <div>
        <h1>Pathways</h1>
        {this.renderLoggedIn()}
      </div>   
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  fetchUserData,
  releaseUserData
}

/*const mapDispatchToProps = (dispatch) => ({
  fetchUserData: () => {
    dispatch(fetchUserData())
  },
  releaseUserData: () => {
    dispatch(releaseUserData())
  }
})*/

function loadData(store) {
  return store.dispatch(fetchUserData());
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
};