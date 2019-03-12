import React, { Fragment } from 'react';

import { TsukiCarousel, RSS } from '../../components';

export function Home(props) {
  return (
    <Fragment>
      <TsukiCarousel />
      <RSS />
      {/* <Carousel /> */}
    </Fragment>
  );
}
