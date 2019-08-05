/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { connect } from "react-redux";
import signupActions from "../redux/Actions/registerActions";
import '../css/register.scss';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      phone_number: '1204356574',
    };
  }
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  
  onSubmitHandler = (e) => {
    e.preventDefault();

    const { email, password, first_name, last_name, phone_number } = this.state;
    const { signingUp } = this.props;

    signingUp(email, password, first_name, last_name, phone_number);
  }
  render() {
    const { email, password, first_name, last_name} = this.state;
    const { errorMessage, isProcessing, userMsg } = this.props;
    return (
      <div className='signupform'>
        <div className="signup-wording">User Registeration</div>
        <form name='form' onSubmit={this.onSubmitHandler}>
          <input
            className="signup-firstname"
            id="signup-firstname"
            name="first_name"
            type="text"
            value={first_name}
            onChange={this.onChangeHandler}
            placeholder="First name"
            required
          />
          <input
            className="signup-lastname"
            id="signup-lastname"
            name="last_name"
            type="text"
            value={last_name}
            onChange={this.onChangeHandler}
            placeholder="Last name"
            required
          />
          <input
            className="signup-email"
            id="signup-email"
            name="email"
            type="email"
            value={email}
            onChange={this.onChangeHandler}
            placeholder="Email"
            required
          />
          <input
            className="signup-password"
            id="signup-password"
            name="password"
            type="password"
            value={password}
            onChange={this.onChangeHandler}
            placeholder="Password"
            required
          />
          {isProcessing && <span>is processing</span>}
          <span>{errorMessage}</span>
          <span>{userMsg}</span>
          <button className="signupButton" type='button' onClick={this.onSubmitHandler}>
            Sign Up
          </button>
          <div className="login-signup-link">
            <Link to="/login">
            &nbsp;Have an account already? Login here
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { isProcessing,  errorMessage, userMsg } = state.registerReducer;
  return {
    isProcessing, errorMessage, userMsg
  };
};
const mapDispatchToProps = dispatch => ({
  signingUp: (email, password, first_name, last_name, phone_number) => {
    signupActions({ email, password, first_name, last_name, phone_number })(dispatch);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
