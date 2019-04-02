import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { releaseUserData } from '../actions/userActions';

const Header = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      {
        (!props.user) ? 
        <Link to="/login">Login</Link> :
        <div>
          Logged in as {props.user.name}
          (<Link to="/" onClick={props.releaseUserData}>Logout</Link>)
        </div>
      }   
    </div>
  )
}

const mapDispatchToProps = {
  releaseUserData
}

const mapStateToProps = (store) => ({
  auth: store.auth,
  user: store.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);