import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../services/user';
import LoginForm from './components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      error: ''
    }
  }

  redirectLoggedIn () {
    console.log('this.props.user', this.props.user);
    if(this.props.user && this.props.user.data) {

      return <Redirect to="/"/>
    }
  }

  render() {
    return(
      <div>
        <LoginForm login={this.props.login} error={this.props.error}/>
        {this.redirectLoggedIn()}
      </div> 
    )  
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = {
  login
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
};