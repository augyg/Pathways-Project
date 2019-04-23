import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import defaultProfile from '../../../../images/default_profile.jpg';
import fullstackCert from '../../../../images/fullstack_cert.jpg';
import facebook from '../../../../images/facebook.png';
import github from '../../../../images/github.png';
import gmail from '../../../../images/gmail.png';

const ProfileHeader = (props) => {
  return (
    <div className="row border p-2">
      <div className="column">
        <img className="rounded-circle" id="profilePicture" src={defaultProfile}/>
        <h5 id="nameLabel">Kyle Jensen</h5>
        <img id="certificate" src={fullstackCert}/>
      </div>   
      <div className="column">
        <a href="http://facebook.com" target="_blank"><img className="social-media-link" src={facebook}/></a>
        <br/>
        <a href="http://github.com" target="_blank"><img className="social-media-link" src={github}/></a>
        <br/>
        <a href="http://mail.google.com" target="_blank"><img className="social-media-link" src={gmail}/></a>
      </div>   
    </div>  
  )
}

export default withStyles(s)(ProfileHeader);