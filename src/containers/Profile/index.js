import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <h1>Profile Page!</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default {
  component: connect(mapStateToProps)(requireAuth(Profile))
}