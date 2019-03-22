import React, { Component } from 'react';
import axios from 'axios';

import { Spinner } from '../Spinner';

import './style/index.scss';

export class InstagramFeed extends Component {
  state = {
    data: [],
    isFetching: true
  };

  async componentDidMount() {
    const instaData = await axios.get(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=3597322204.fc05a75.95d7898c38cb4b70922dcdb9005ff665&count=8'
    );

    this.setState({ data: instaData.data.data, isFetching: false });
  }

  render() {
    return (
      <section>
        <div style={{ paddingBottom: '4rem', paddingTop: '4rem' }} className='container instagram'>
          <div style={{ marginBottom: '2rem' }} className='row'>
            <div className='col-lg-12'>
              <h3 className='font-weight-bold'>Novidades do Instagram!</h3>
              <hr />
            </div>
            {this.state.isFetching ? (
              <div style={{ paddingTop: '2rem' }} className='container text-center insta-load'>
                <Spinner />
              </div>
            ) : (
              this.state.data.map((value, index) => {
                return (
                  <div key={index} style={{ marginBottom: '1rem', marginTop: '1rem' }} className='col-md-3'>
                    <a href={value.link}>
                      <div className='card shadow-sm'>
                        <img src={value.images.low_resolution.url} alt={index} className='card-img-top' />
                        <div style={{ padding: '0.35rem' }} className='card-body'>
                          <i style={{ color: 'red', paddingRight: '0.5rem' }} className='fas fa-heart' />
                          {value.likes.count}
                          <i style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} className='fas fa-comments' />
                          {value.comments.count}
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    );
  }
}
