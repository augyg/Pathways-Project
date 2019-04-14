import React, {Component} from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

class RegisterProgrammer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
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

  renderFileName() {
    return (this.state.selectedResume) ?
      this.state.selectedResume.name
    :
      "Choose file"
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="name" className="form-control" placeholder="First Name"  required/>
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="name" className="form-control" placeholder="Last Name" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password" required />
            </div>
            <div className="form-group col-md-6">
              <label >Confirm Password</label>
              <input type="password" class="form-control" placeholder="Password" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="1234 Main St" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input type="text" className="form-control" id="inputCity" required />
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <select id="inputState" className="form-control" required>
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Zip</label>
              <input type="text" className="form-control" id="inputZip" required/>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label>Date of Birth</label>
              <input type="date" className="form-control" placeholder="Date of Birth" required/>
            </div>

            <div class="form-group col-md-6">
              <label>Phone Number (Optional)</label>
              <input type="text" className="form-control" placeholder="Phone Number" required/>
            </div>
          </div>

          <div className="form-check py-2">
            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
            <label className="form-check-label">
              I have read and accept the term and conditions
              </label>
          </div>

          <div className="form-check py-2">
            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label">
              Subscribe to receive updates on our progress and release dates?
              </label>
          </div>

          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(mapStateToProps)(RegisterProgrammer);