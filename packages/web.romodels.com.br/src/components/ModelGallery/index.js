import React, { Component, Fragment } from 'react';

import { Gallery } from './Gallery';
import { CategoryFilter } from './CategoryFilter';

export class ModelGallery extends Component {
  state = {
    activeCategory: 'all',
    data: []
  };

  componentWillMount = () => {
    this.setState({ data: this.mockData() });
  };

  handleCategorySelect = category => {
    console.log('category', category);
    this.setState({ activeCategory: category });
  };

  mockData() {
    let data = [];
    for (let index = 0; index < 20; index++) {
      data.push({
        id: index,
        url: 'http://placehold.it/200x200'
      });
    }

    return data;
  }

  render() {
    return (
      <Fragment>
        <CategoryFilter handleCategorySelect={this.handleCategorySelect}>
          <Gallery data={this.state.data} />
        </CategoryFilter>
      </Fragment>
    );
  }
}
