import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import {Link} from 'react-router-dom'
import LineBreak from '../../../../components/LineBreak';

const LoginForm = (props) => {
  const renderError = () => {
    if(props.error) {
      alert(props.error.message);
    } 
  }

  return (
    <form onSubmit={props.handleLogin} className="d-flex justify-content-center py-5">
      <div className="row border col-md-6 py-4 rounded">
        <div className="col-md-5 py-2">
          <h4>Log In to Your Account</h4>
          {renderError()}
          <div className="form-group row">
            <label className="col-sm col-form-label">Email or Username</label>
            <div className="col-sm-12">
              <input type="email" className="form-control" name="email" id="staticEmail" placeholder="email@example.com"/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm col-form-label">Password</label>
            <div className="col-sm-12">
              <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Enter Password"/>
            </div>
          </div>
         

            <span className="form-check form-check-inline" id="remember-me">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <small className="form-check-label" >
                Remember me
              </small>
             
              <Link to="/passwordreset" className="form-check-label ml-4"><small>Forgot Password?</small></Link>
            </span>
    
          <button type="submit" id="login-button" className="btn btn-primary col-sm-12 mt-4 stretch">Log in</button>
        </div>

        <LineBreak label="OR" vertical/>
        
        <div className="col-md-5 pt-2 pl-0">
          <h4 className="pl-3">Sign in through...</h4>
          <span className="row justify-content-center py-4">
            <button type="button" className="btn btn-brand btn-google-plus col-md-9">
              <i className="fa fa-google-plus pull-left"></i><span>Google plus</span>
            </button>
          </span>
          <span className="row justify-content-center pb-4">
            <button type="button" className="btn btn-brand btn-facebook col-md-9">
              <i className="fa fa-facebook pull-left"></i><span>Facebook</span>
            </button>
          </span>
          <span className="row justify-content-center pb-4">
            <button type="button" className="row btn btn-brand btn-github col-md-9">
              <i className="fa fa-github pull-left"></i><span>Github</span>
            </button>
          </span>
          <Link to="/register"><small className="pl-3 pt-2">Don't have an account? Sign up now!</small></Link>
        </div>
      </div>
    </form>

  )
}

export default withStyles(s)(LoginForm);