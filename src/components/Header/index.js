import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../services/user';

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

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (store) => ({
  user: store.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);