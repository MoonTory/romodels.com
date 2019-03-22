import React, { Component } from 'react';

import { CategoryFilter } from './CategoryFilter';

export class ModelGallery extends Component {
  render() {
    return (
      <div>
        <CategoryFilter />
        <p>Model Gallery</p>
      </div>
    );
  }
}
