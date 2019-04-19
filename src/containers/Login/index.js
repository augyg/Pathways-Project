import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../services/user';
import { clearError } from '../../services/error/actions';
import LoginForm from './components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      formError: ''
    }
  }

  componentDidUpdate() {
    if(this.props.error !== null) {
      this.setState({formError: this.props.error})
      this.props.clearError();
    }
  }

  redirectLoggedIn () {
    if(this.props.user && this.props.user.data) {
      return <Redirect to="/"/>
    }
  }

  render() {
    return(
      <div>
        <LoginForm login={this.props.login} error={this.state.formError}/>
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
  login, clearError
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
};