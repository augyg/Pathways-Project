import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const Header = (props) => {
  return (
    <div className="navbar navbar-default" >
      <Link to="/" className="nav-link text-white active">Pathways</Link>
      <div className="justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-white">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-white">Register</Link>
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

export default withStyles(s)(Header);