import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import logo from './images/logo.png';

const Header = (props) => {
  let userLoggedIn = (!props.user || !props.user.data);
  return (
    <div className="navbar navbar-default">
      <Link to="/" className="navbar-left"><img id="logo" src={logo}/></Link>
      <div className="justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-white">Profile</Link>
          </li>
          {
            (userLoggedIn) ?
            <li className="nav-item">
              <Link to="/register" className="nav-link text-white">Register</Link>
            </li> : null
          }    
          <li className="nav-item">
            {
              (userLoggedIn) ?
                <Link to="/login" className="nav-link text-white">Login</Link> 
              :
                <Link to="/" className="nav-link text-white" onClick={props.logout}>Logout</Link>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default withStyles(s)(Header);