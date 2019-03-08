import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About } from '../pages';

export function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Fragment>
  );
}
