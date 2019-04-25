import React from 'react';

const LoginForm = (props) => {
  const renderError = () => {
    if(props.error) {
      alert('hello');
      //return <p style={{color: 'red'}}>{props.error.message}</p>
    } 
  }
  return (
    <form onSubmit={props.handleLogin}>
      <h1>Pathways</h1>
      {renderError()}
      <label>Email:</label>
      <input type="email" name="email"/><br/>
      <label>Password:</label>
      <input type="password" name="password"/><br/>
      <button>Log in!</button>
    </form>
  )
}

export default LoginForm;