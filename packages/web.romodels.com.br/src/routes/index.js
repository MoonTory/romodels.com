import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  About,
  Agency,
  Contact,
  FacaParte,
  SchoolPage,
  Models
} from '../pages';

export function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modelos" component={Models} />
        <Route exact path="/about" component={About} />
        <Route exact path="/agencia" component={Agency} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/quer-ser-modelo" component={FacaParte} />
        <Route exact path="/escola" component={SchoolPage} />
      </Switch>
    </Fragment>
  );
}
