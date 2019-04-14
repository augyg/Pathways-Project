import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      {
        (!props.user || !props.user.data) ? 
        <Link to="/login">Login</Link> :
        <div>
          Logged in as {props.user.data.name}
          (<Link to="/" onClick={props.logout}>Logout</Link>)
        </div>
      } 
    </div>
  )
}

export default Header;