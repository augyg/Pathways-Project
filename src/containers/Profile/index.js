import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';
import ProgrammerProfile from './containers/ProgrammerProfile';
import CompanyProfile from './containers/CompanyProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid page">
        {(props.accountType === 0 ) ? (
          <ProgrammerProfile/>
        ) : (
          <CompanyProfile/>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  accountType: user.accountType
})

export default {
  component: connect(mapStateToProps)(requireAuth(Profile))
}