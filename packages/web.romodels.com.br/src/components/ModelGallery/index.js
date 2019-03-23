import React, { Component, Fragment } from 'react';

import { Gallery } from './Gallery';
import { CategoryFilter } from './CategoryFilter';

export class ModelGallery extends Component {
  data = [];

  render() {
    return (
      <Fragment>
        <CategoryFilter>
          <Gallery data={this.data} />
        </CategoryFilter>
      </Fragment>
    );
  }
}
