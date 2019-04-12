import React, {Component} from 'react';
import { connect } from 'react-redux';

class CreateAccountProgrammer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('state', this.state.programmerName);
  }

  handleSubmit() {
    console.log('submit', this.state.programmerName)
  }

  render() {
    return (
      <div>
        <h1>Create Programmer Profile</h1>
        Programmer Name:
        <input name='programmerName' onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(mapStateToProps)(CreateAccountProgrammer);