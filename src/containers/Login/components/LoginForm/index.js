import React from 'react';

const LoginForm = (props) => {
  const renderError = () => {
    if(props.error) {
      return <p style={{color: 'red'}}>{props.error.message}</p>
    } 
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    props.login({email, password});
  }
  return (
    <form onSubmit={handleLogin}>
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