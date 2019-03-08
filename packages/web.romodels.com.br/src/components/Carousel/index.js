import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import './styles/carousel.css';

export default function iCarousel() {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src='https://source.unsplash.com/random/1200x800' alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://source.unsplash.com/random/1200x800' alt='Third slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://source.unsplash.com/random/1200x800' alt='Third slide' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://source.unsplash.com/random/1200x800' alt='Third slide' />
          <Carousel.Caption>
            <h3>Forth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://source.unsplash.com/random/1200x800' alt='Third slide' />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}
