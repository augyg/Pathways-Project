import React from 'react';

const LoginForm = (props) => {
  const renderError = () => {
    if(props.error) {
      return <p style={{color: 'red'}}>{props.error.message}</p>
    } 
  }
  return (
    <form onSubmit={props.handleLogin}>
      <h1>Pathways</h1>
      {renderError()}
      <label>Email:</label>
      <input name="email"/><br/>
      <label>Password:</label>
      <input name="password"/><br/>
      <button>Log in!</button>
    </form>
  )
}

export default LoginForm;