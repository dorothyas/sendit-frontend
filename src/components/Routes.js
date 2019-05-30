import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';
import LoginForm from './LoginComponent';
import ParcelsForm from './ParcelsComponent'

const Routes = () => (
  <>
    <Router>
      <switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/parcels" component={ParcelsForm} />
      </switch>
    </Router>
    </>
);

export default Routes;
