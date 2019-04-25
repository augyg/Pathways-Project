import React, {Component} from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import ProfileHeader from './components/ProfileHeader';

class ProgrammerProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (    
      <div className="container-fluid">
        <ProfileHeader test="test"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const connectedComponent = connect(mapStateToProps)(ProgrammerProfile);
export default withStyles(s)(connectedComponent);