import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css'

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row">
        {/* 4 columns  */}
        <div className="col">
          <img src="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_960_720.jpg" />
          <h3>Kyle Jensen</h3>
          
          
        </div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>

      </div>
    )
  }
}

export default withStyles(s)(ProfileHeader);