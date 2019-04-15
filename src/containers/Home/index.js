import React, {Component} from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  renderLoggedIn() {
    return this.props.user && this.props.user.data ? (
      <div>
        <p>{this.props.user.data.name || this.props.user.data.accountHolder} is logged in!</p>
        <p>Data: {JSON.stringify(this.props.user.data, null, 2)}</p>
      </div>   
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