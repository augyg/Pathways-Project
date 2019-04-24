import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const LoginForm = (props) => {
  const renderError = () => {
    if(props.error) {
      return <p style={{color: 'red'}}>{props.error.message}</p>
    } 
  }

  return (
    
    <form onSubmit={props.handleLogin} className="d-flex justify-content-center py-5">
      <div className="row border col-md-8 py-4 rounded">
        <div className="col-md-5 py-2">
          <h5>Log In to Your Account</h5>
          {renderError()}
     
          <div className="form-group row">
            <label className="col-sm col-form-label">Email or Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com"/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
          </div>
         

            <span className="form-check form-check-inline" id="remember-me">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" >
                Remember me
              </label>
             
              <label className="form-check-label pl-5">Forgot Password?</label>
            </span>
  
          <button type="button" id="login-button" className="btn btn-primary my-2">Log in</button>
        </div>
        <div className="col-md-2">
          <div className="vl"></div>
          <div className="p-2">OR</div>
          <div className="vl"></div>
        </div>
        
        <div className="col-md-5 pt-2 pl-0">
          <h5 className="pl-3">Sign in through...</h5>
          <span className="row justify-content-center py-4">
            <button type="button" className="row btn btn-brand btn-google-plus col-md-10">
              <i className="fa fa-google-plus"></i><span>Google plus</span>
            </button>
          </span>
          <span className="row justify-content-center pb-4">
            <button type="button" className="btn btn-brand btn-facebook col-md-10">
              <i className="fa fa-facebook"></i><span>Facebook</span>
            </button>
          </span>
          <span className="row justify-content-center pb-4">
            <button type="button" className="row btn btn-brand btn-github col-md-10">
              <i className="fa fa-github"></i><span>Github</span>
            </button>
          </span>
          <h6 className="pl-5 pt-2">Don't have an account? Sign up now!</h6>
        </div>
      </div>
    </form>

  )
}

export default withStyles(s)(LoginForm);