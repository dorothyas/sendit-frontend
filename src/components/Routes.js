import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';
import LoginForm from './LoginComponent';

const Routes = () => (
  <>
    <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
    </Router>
    </>

);

export default Routes;
