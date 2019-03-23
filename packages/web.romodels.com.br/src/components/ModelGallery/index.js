import React, { Component } from 'react';

import { Gallery } from './Gallery';
import { CategoryFilter } from './CategoryFilter';

export class ModelGallery extends Component {
  data = [];

  render() {
    return (
      <div style={{ paddingBottom: '4rem' }}>
        <CategoryFilter />
        <br />
        <Gallery data={this.data} />
      </div>
    );
  }
}
