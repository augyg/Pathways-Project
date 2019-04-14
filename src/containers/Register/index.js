import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

import RegisterCompany from './components/RegisterCompany';
import RegisterProgrammer from './components/RegisterProgrammer';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountType: 'programmer'
    }

    this.setAccountType = this.setAccountType.bind(this)
  }

  setAccountType(type) {
    this.setState({
      selectedAccountType: type
    })
  }

  render() {
    const programmerStyle = (this.state.selectedAccountType === 'programmer') ? {backgroundColor: '#dfe4ea'} : {};
    const companyStyle = (this.state.selectedAccountType === 'company') ? {backgroundColor: '#dfe4ea'} : {};

    return (
      <div className="align-center">
        <h1 className="display-4 text-center">Create Account</h1>
        <ul className="pagination justify-content-center" style={{marginTop: 20}}>
          <li className="page-item account-type-selector" onClick={() => this.setAccountType('programmer')}>
            <a className="page-link text-center" style={programmerStyle}>Programmer</a>
          </li>
          <li className="page-item account-type-selector" onClick={() => this.setAccountType('company')}>
            <a className="page-link text-center"  style={companyStyle}>Company</a>
          </li>
        </ul>
        {
          (this.state.selectedAccountType === 'company') ?
          <RegisterCompany />
            :
          <RegisterProgrammer />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default {
  component: withStyles(s)(connect(mapStateToProps)(RegisterPage))
}