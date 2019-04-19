import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      let loggedIn = (this.props.user && this.props.user.data);
      if(!loggedIn) {
        return <Redirect to="/login"/>
      } else {
        return <ChildComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  })

  return connect(mapStateToProps)(RequireAuth);
}