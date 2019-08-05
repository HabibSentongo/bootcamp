import {
  IS_PROCESSING,
  IS_SIGNUP_SUCCESS,
  IS_SIGNUP_FAILED
} from '../actionTypes';

const initialState = {
  isProcessing: false,
  errorMessage: "",
  userMsg: ""
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      };
    case IS_SIGNUP_SUCCESS:
      return {
        ...state,
        isProcessing: false,
          userMsg: action.payload.message

      };
    case IS_SIGNUP_FAILED:
      return {
        ...state,
        isProcessing: false,
          errorMessage: action.payload
      };
    default:
      return state;

  }
}
export default registerReducer;