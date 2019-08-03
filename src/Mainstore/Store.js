import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/Reducers/loginReducers';
import registerReducer from '../redux/Reducers/registerReducer';

const reducers = combineReducers({
  loginReducer,
  registerReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
