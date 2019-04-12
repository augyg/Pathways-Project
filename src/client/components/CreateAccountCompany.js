import React, {Component} from 'react';
import { connect } from 'react-redux';

class CreateAccountCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    console.log('submit', this.state.companyName)
  }

  render() {
    return (
      <div>
        <h1>Create Company Profile</h1>
        Company Name:
        <input name="companyName" onChange={this.handleChange}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(mapStateToProps)(CreateAccountCompany)