import React, { Fragment } from 'react';

import { Header, Main, Footer } from '../layout';
import { Router } from '../routes';

export function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Router/>
      </Main>
      <Footer />
    </Fragment>
  );
}
