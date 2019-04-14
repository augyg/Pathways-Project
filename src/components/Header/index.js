import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../services/user';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from '../../Test.css';

const Header = (props) => {
  return (
    <div className="app-header navbar header" style={s.header}>
      <Link to="/" className="nav-link text-white active">Pathways</Link>
      <div className="justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-white">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link text-white">Create Account</Link>
          </li>
          <li className="nav-item">
            {
              (!props.user || !props.user.data) ? 
                <Link to="/login" className="nav-link text-white">Login</Link> :
                <div>
                  Logged in as {props.user.data.name}
                  (<Link to="/" className="nav-link text-white" onClick={props.logout}>Logout</Link>)
                </div>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (store) => ({
  user: store.user
})

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Header));