import React, { Component } from 'react';
import { connect } from 'react-redux';
import industries from './industries'

class RegisterCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: ''
    }
  }

  handleSubmit() {
    console.log('submit', this.state.companyName)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Company</label>
              <input type="name" className="form-control" placeholder="Company Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Choose your Industry</label>
              <select id="inputIndustry" className="form-control">
                <option>Choose...</option>
                {
                  industries.map((industry, id) => {
                    return <option key={id}>{industry}</option>
                  })
                }
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="name" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="name" className="form-control" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>What is your role at the company?</label>
              <input type="name" className="form-control" placeholder="Position" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
            <div className="form-group col-md-6">
              <label >Confirm Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="1234 Main St"></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <select id="inputState" className="form-control">
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Zip</label>
              <input type="text" className="form-control" id="inputZip"></input>
            </div>
          </div>

       
          <div className="form-check py-2">
            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label" htmlFor="gridCheck">
              I have read and accept the term and conditions
              </label>
          </div>

          <div className="form-check py-2">
            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label" htmlFor="gridCheck">
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

export default connect(mapStateToProps)(RegisterCompany)