import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages';

export function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Fragment>
  );
}
