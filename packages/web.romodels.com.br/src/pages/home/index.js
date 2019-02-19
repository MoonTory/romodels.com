import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import Carousel from '../../components/Carousel';

export function Home(props) {
  return (
    <Fragment>
      <Carousel />

      <Carousel />
    </Fragment>
  );
}
