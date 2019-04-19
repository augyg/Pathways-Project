import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const Header = (props) => {
  let userLoggedIn = (props.user && props.user.data) ? 1 : 0;

  let headerNavOptions = [
    { link: '/profile', content: 'Profile', authState: 1 },
    { link: '/register', content: 'Register', authState: 0 },
    { link: '/login', content: 'Login', authState: 0 },
    { link: '/', content: 'Logout', authState: 1, onClick: props.logout }
  ]
  
  return (
    <div className="navbar navbar-default" >
      <Link to="/" className="navbar-left text-white active">Pathways</Link>
      <div className="justify-content-end">
        <ul className="nav">
          {
            headerNavOptions.map((o, i) => {
              console.log('userLoggedIn', userLoggedIn, 'o.authState', o.authState, '&', (userLoggedIn ^ o.authState))
              return (userLoggedIn ^ o.authState === 0) ? (
                <li key={i} className="nav-item">
                  <Link to={o.link} className="nav-link text-white" onClick={o.onClick}>{o.content}</Link>
                </li>
              ) : null
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default withStyles(s)(Header);