import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './Landing';
import { ProtectedRoute, ProtectedLoginRoute } from './ProtectedRoute'
import LoginView from '../containers/loginView';
import LogoutPage from './../containers/Logout'
import ParcelsForm from './ParcelsComponent'
import SignUpForm from './SignupComponent';
import GetParcelComponent from './GetParcelsComponent';



const Routes = () => (
  <>
    <Router>
      <Switch>
        <ProtectedLoginRoute exact path="/" component={Landing} />
        <ProtectedLoginRoute path="/login" component={LoginView} />
        <ProtectedRoute path="/logout" component={LogoutPage} />
        <ProtectedRoute path="/parcels" component={ParcelsForm} />
        <ProtectedLoginRoute path="/register" component={SignUpForm} />
        <ProtectedRoute path="/parcel/:id" component={GetParcelComponent} />

      </Switch>
    </Router>
  </>
);

export default Routes;
