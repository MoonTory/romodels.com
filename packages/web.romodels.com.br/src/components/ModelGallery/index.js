import React, { Component } from 'react';

import { Gallery } from './Gallery';
import { CategoryFilter } from './CategoryFilter';

export class ModelGallery extends Component {
  render() {
    return (
      <div>
        <CategoryFilter />
        <Gallery />
      </div>
    );
  }
}
