import {
    IS_PROCESSING,
    IS_LOGIN_SUCCESS,
    IS_LOGIN_FAILED
  } from '../actionTypes';
  
  const initialState = {
    isProcessing: false,
    errorMessage: "",
    userMsg: ""
  }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_PROCESSING:
        return {
          ...state,
          isProcessing: true,
        };
      case IS_LOGIN_SUCCESS:
        return {
          ...state,
          isProcessing: false,
          userMsg: action.payload.message
  
        };
      case IS_LOGIN_FAILED:
        return {
          ...state,
          isProcessing: false,
          errorMessage: action.payload
        };
      default:
        return state;
  
    }
  }
  export default loginReducer;