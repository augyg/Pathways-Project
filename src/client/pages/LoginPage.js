import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserData, releaseUserData } from '../actions/userActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    // this.releaseFormErrors();
  }

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  handleLogin() {
    const loginData = {username: this.state.username, password: this.state.password};
    console.log(loginData);
    this.props.fetchUserData(loginData);
    //this.state.error = 'error';
  }

  redirectLoggedIn() {
    if(this.props.user) {
      return <Redirect to="/"/>
    }
  }

  renderError() {
    //return <div>{this.state.error}</div>
    if(this.props.error) {
      return <p style={{color: 'red'}}>{this.props.error.message}</p>
    } 
  }

  render() {
    return (
      <div>
        <h1>Pathways</h1>
        {this.renderError()}
        <label>Username:</label>
        <input name="username" onChange={this.handleChange}/><br/>
        <label>Password:</label>
        <input name="password" onChange={this.handleChange}/><br/>
        <button onClick={this.handleLogin}>Log in!</button>
        {this.redirectLoggedIn()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = {
  fetchUserData,
  releaseUserData
}

function loadData(store) {
  //TODO: Check cookies to see if they are authenticated
  return store.dispatch(fetchUserData({username: 'kyle13524', password: 'monkeys123'}));
}

export default {
  //loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
};