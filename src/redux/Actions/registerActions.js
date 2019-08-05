import axios from 'axios';
import {
  IS_PROCESSING,
  IS_SIGNUP_SUCCESS,
  IS_SIGNUP_FAILED
} from '../actionTypes';

const isSigningUp = () => ({
  type: IS_PROCESSING,
});

const isSignupSuccess = resp => ({
  type: IS_SIGNUP_SUCCESS,
  payload: resp.data
});

const isSignupFailed = error => ({
  type: IS_SIGNUP_FAILED,
  payload: error.response.data.error
});

const registerActions = (userSignupData,) => dispatch => {
  dispatch(isSigningUp());
  return axios.post('https://my-epic-mail.herokuapp.com/api/v2/auth/signup', userSignupData)
  .then((resp) => {
    console.log('=====>', resp );
    dispatch(isSignupSuccess(resp));
    localStorage.setItem('token', resp.data.token);
    window.location = '/login';
  }).catch((error) => {
    console.log(error);
      dispatch(isSignupFailed(error));
    });
}
export default registerActions;
