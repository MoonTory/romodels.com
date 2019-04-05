import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Header, Main, Sidebar } from '../../components';

export function Dashboard(props) {
  return (
    <Fragment>
      <Header />
      <Main>
        <Sidebar {...props} />
        <Route exact path={`${props.match.url}`} render={() => <p>Home</p>} />
        <Route exact path={`${props.match.url}/casting`} render={() => <p>Casting</p>} />
        <Route exact path={`${props.match.url}/config`} render={() => <p>Config</p>} />
      </Main>
    </Fragment>
  );
}
