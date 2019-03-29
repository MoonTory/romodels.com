import React, { Fragment } from 'react';

import './scss/style.scss';
import logo from '../assets/logo_small.svg';

export function App() {
  return (
    <Fragment>
      <div className='container'>
        <h1>Henlo World</h1>
        <img src={logo} />
      </div>
    </Fragment>
  );
}
