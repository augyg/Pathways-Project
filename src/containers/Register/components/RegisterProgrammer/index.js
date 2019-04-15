import React from 'react';

const RegisterProgrammer = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      accountType: 0,
      name: `${event.target.firstname.value} ${event.target.lastname.value}`,
      email: event.target.email.value,
      password: event.target.password.value,
      address: event.target.address.value,
      city: event.target.city.value,
      province: event.target.province.value,
      postalCode: event.target.postalCode.value,
      dateOfBirth: event.target.dateOfBirth.value,
      phoneNumber: event.target.phoneNumber.value,
      tos: event.target.tos.value === 'on' ? 1 : 0,
      subscribe: event.target.subscribe.value === 'on' ? 1 : 0
    };
    console.log('formValues', formValues);
    console.log('props.register', props.register)
    props.register(formValues);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input type="name" name="firstname" className="form-control" placeholder="First Name"  required/>
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="name" name="lastname" className="form-control" placeholder="Last Name" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Email</label>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Password" required />
          </div>
          <div className="form-group col-md-6">
            <label >Confirm Password</label>
            <input type="password" name="confirm-password" className="form-control" placeholder="Password" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Address</label>
            <input type="text" name="address" className="form-control" placeholder="1234 Main St" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input type="text" name="city" className="form-control" id="inputCity" required />
          </div>
          <div className="form-group col-md-3">
            <label>Province</label>
            <select className="form-control" name="province" required>
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Postal Code</label>
            <input type="text" name="postalCode" className="form-control" id="inputZip" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Date of Birth</label>
            <input type="date" name="dateOfBirth" className="form-control" placeholder="Date of Birth" required/>
          </div>

          <div className="form-group col-md-6">
            <label>Phone Number (Optional)</label>
            <input type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" required/>
          </div>
        </div>

        <div className="form-check py-2">
          <input className="form-check-input" name="tos" type="checkbox" id="gridCheck" required/>
          <label className="form-check-label">
            I have read and accept the term and conditions
            </label>
        </div>

        <div className="form-check py-2">
          <input className="form-check-input" name="subscribe" type="checkbox" id="gridCheck"></input>
          <label className="form-check-label">
            Subscribe to receive updates on our progress and release dates?
            </label>
        </div>

        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default RegisterProgrammer;