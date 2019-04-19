import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';
import ProfileHeader from './components/ProfileHeader'

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="container">
        <ProfileHeader/>
        {/* AS a list item: I need a profile header */}
        {/* I need a test display bar */}
        {/* Work experience component */}
        {/* Volunteer experience bar */}
        {/* Passions and interest component */}
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