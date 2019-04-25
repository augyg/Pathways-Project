import React from 'react';
import industries from './industries';

const RegisterCompany = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      accountType: 1,
      name: `${event.target.firstname.value} ${event.target.lastname.value}`,
      companyName: event.target.company.value,
      industry: event.target.industry.value,
      role: event.target.role.value,
      email: event.target.email.value,
      password: event.target.password.value,
      address: event.target.address.value,
      city: event.target.city.value,
      province: event.target.province.value,
      postalCode: event.target.postalCode.value,
      tos: event.target.tos.value === 'on' ? 1 : 0,
      subscribe: event.target.subscribe.value === 'on' ? 1 : 0
    };
    props.register(formValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Company</label>
            <input type="name" name="company" className="form-control" placeholder="Company Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Choose your Industry</label>
            <select name="industry" className="form-control">
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
            <input type="name" name="firstname" className="form-control" placeholder="First Name" />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="name" name="lastname" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>What is your role at the company?</label>
            <input type="name" name="role" className="form-control" placeholder="Position" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Email</label>
            <input type="email" name="email" className="form-control" placeholder="Email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
          <div className="form-group col-md-6">
            <label >Confirm Password</label>
            <input type="password" name="confirm-password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Address</label>
            <input type="text" name="address" className="form-control" placeholder="1234 Main St"></input>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input type="text" name="city" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-3">
            <label>Province</label>
            <select id="inputState" name="province" className="form-control">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Postal Code</label>
            <input type="text" name="postalCode" className="form-control"></input>
          </div>
        </div>

        <div className="form-check py-2">
          <input className="form-check-input" name="tos" type="checkbox"></input>
          <label className="form-check-label">
            I have read and accept the term and conditions
            </label>
        </div>

        <div className="form-check py-2">
          <input className="form-check-input" name="subscribe" type="checkbox"></input>
          <label className="form-check-label">
            Subscribe to receive updates on our progress and release dates?
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default RegisterCompany;