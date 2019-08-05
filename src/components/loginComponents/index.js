/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { connect } from "react-redux";
import loginActions from '../../redux/Actions/loginActions';
import '../../css/login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  
  onSubmitHandler = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loggingIn } = this.props;

    // if (email && password) {
    loggingIn(email, password);
    // }
  }
  render() {
    const { email, password } = this.state;
    const { errorMessage, isProcessing, userMsg } = this.props;
    return (
      <div className='loginform'>
        <div className="login-wording">User Login</div>
        <form name='form' onSubmit={this.onSubmitHandler}>
          <input
            className="login-email"
            id="login-email"
            name="email"
            type="email"
            value={email}
            onChange={this.onChangeHandler}
            placeholder="Enter valid email"
            required
          />
          <input
            className="login-password"
            id="login-password"
            name="password"
            type="password"
            value={password}
            onChange={this.onChangeHandler}
            placeholder="password"
            required
          />
          {isProcessing && <span>loading...</span>}
          <span>{errorMessage}</span>
          <span>{userMsg}</span>
          <button className="loginButton" type='button' onClick={this.onSubmitHandler}>
            Login
          </button>

          <div className="login-signup-link">  
            <Link to="/signup">
              &nbsp;&nbsp; Dont have an account? Sign Up
            </Link>
          </div>
        </form>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { isProcessing,  errorMessage, userMsg } = state.loginReducer;
  return {
    isProcessing, errorMessage, userMsg
  };
};
const mapDispatchToProps = dispatch => ({
  loggingIn: (email, password) => {
    dispatch(loginActions({ email, password }));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
