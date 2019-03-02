import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <div>
      <Link to="/">Pathways</Link>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

function mapStateToProps(store) {
  return { auth: store.auth };
}

export default connect(mapStateToProps)(Header);