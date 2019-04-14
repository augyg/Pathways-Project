import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  
  render(){
    return (
      <div className="row">
        <div className="col-12 col-md-8">
           
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default {
  component: connect(mapStateToProps)(Profile)
}