import React, { Fragment } from 'react';

import { TsukiCarousel, InstagramFeed } from '../../components';

export function Home(props) {
  return (
    <Fragment>
      <TsukiCarousel />
      <InstagramFeed />
      {/* <Carousel /> */}
    </Fragment>
  );
}
