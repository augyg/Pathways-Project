import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';
import ProfileHeader from './Programmer/ProfileHeader';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="container-fluid page">
        <ProfileHeader test="test"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default {
  component: connect(mapStateToProps)(requireAuth(Profile))
}