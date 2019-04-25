import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Company Profile</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const connectedComponent = connect(mapStateToProps)(CompanyProfile);
export default withStyles(s)(connectedComponent);