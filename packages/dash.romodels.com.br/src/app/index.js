import React, { Fragment } from 'react';

import Router from '../routes';
import logo from '../assets/logo_small.svg';

export function App() {
  return (
    <Fragment>
      <div className='container text-center'>
        <h1>Henlo World</h1>
        <img src={logo} />
      </div>
      <Router />
    </Fragment>
  );
}
