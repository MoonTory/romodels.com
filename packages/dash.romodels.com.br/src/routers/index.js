import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginPage } from '../pages/login';
import { Dashboard } from '../layout/Dashboard';

export function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard' render={props => <Dashboard {...props} />} />
      </Switch>
    </Fragment>
  );
}
