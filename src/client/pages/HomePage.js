import React, {Component} from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  renderLoggedIn() {
    return this.props.user ? (
      <p>{this.props.user.name} is logged in!</p>
    ) : (
      <p>There is no account logged in.</p>
    )
  }

  render() {
    return (
      <div>
        <h1>Pathways home</h1>
        {this.renderLoggedIn()}
      </div>
    )
  }
}

const loadData = (store) => {
  //if(store.getState('auth')) {
  //  fetchUserData
  //}
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
}; 