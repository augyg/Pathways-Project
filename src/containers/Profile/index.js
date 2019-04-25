import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';
import ProgrammerProfile from './containers/ProgrammerProfile';
import CompanyProfile from './containers/CompanyProfile';

const Profile = (props) => {
  return (
    (props.accountType === 0 ) ? (
      <ProgrammerProfile/>
    ) : (
      <CompanyProfile/>
    )
  )  
}

const mapStateToProps = ({user}) => ({
  accountType: user.accountType
})

export default {
  component: connect(mapStateToProps)(requireAuth(Profile))
}