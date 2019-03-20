import React, { Fragment } from 'react';

import { Jumbotron, AboutUs, Mission, Team } from '../../components';

export function About() {
  return (
    <Fragment>
      <Jumbotron />
      <AboutUs />
      <Mission />
      <Team />
    </Fragment>
  );
}
