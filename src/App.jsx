import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/loginComponents';
import Register from './components/registerComponent';
import Landing from './components/landingComponent';
export default function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Register} />
      <Route path="/" exact component={Landing} />
    </Router>
  );
}
