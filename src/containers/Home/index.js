import React, {Component} from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  renderLoggedIn() {
    return this.props.user && this.props.user.data ? (
      <p>{this.props.user.data.name} is logged in!</p>
    ) : (
      <p>There is no account logged in.</p>
    )
  }

  render() {
    return (
      <div>
        <h1>Pathways home</h1>
        {this.renderLoggedIn()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default {
  component: connect(mapStateToProps)(HomePage)
}; 