import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { releaseUserData } from '../actions/userActions';
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
              (!props.user) ?
                <Link to="/login" className="nav-link text-white">Login</Link> :
                <div>
                  Logged in as {props.user.name}
                  (<Link to="/" className="nav-link text-white" onClick={props.releaseUserData}>Logout</Link>)
                </div>
            }
          </li>
        </ul>
      </div>
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

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Header));