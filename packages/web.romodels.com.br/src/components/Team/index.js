import React from 'react';

import './style/index.scss';

export function Team() {
  return (
    <div style={{ marginTop: '4rem', marginBottom: '4rem' }} className='container team'>
      <div style={{ marginBottom: '2rem' }} className='row'>
        <div className='col-lg-12'>
          <h3 className='font-weight-bold'>Colaboradores</h3>
          <hr style={{ margin: '0 0 2rem 0' }} />
        </div>
      </div>

      {/*  Begin of Team Members */}
      <div className='row'>
        <div className='col-lg-4 team-member'>
          <img
            style={{ marginBottom: '3rem' }}
            class='rounded-circle'
            src='https://source.unsplash.com/random/140x140'
            alt='Generic placeholder'
            width='140'
            height='140'
          />
          <h3>
            Ronaldo <span className='text-danger'>Oliveira</span>
          </h3>
          <p className='lead'>Diretor</p>
          <p className='text-justify'>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna.
          </p>
          <div className='icons'>
            <a href='/'>
              <i className='fab fa-instagram fa-2x' />
            </a>
            <a href='/'>
              <i className='fab fa-facebook fa-2x' />
            </a>
          </div>
        </div>
        <div className='col-lg-4 team-member'>
          <img
            style={{ marginBottom: '3rem' }}
            class='rounded-circle'
            src='https://source.unsplash.com/random/140x140'
            alt='Generic placeholder'
            width='140'
            height='140'
          />
          <h3>
            Celiomar <span className='text-danger'>Costa</span>
          </h3>
          <p className='lead'>Diretor</p>
          <p className='text-justify'>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna.
          </p>
          <div className='icons'>
            <a href='/'>
              <i className='fab fa-instagram fa-2x' />
            </a>
            <a href='/'>
              <i className='fab fa-facebook fa-2x' />
            </a>
          </div>
        </div>
        <div className='col-lg-4 team-member'>
          <img
            style={{ marginBottom: '3rem' }}
            class='rounded-circle'
            src='https://source.unsplash.com/random/140x140'
            alt='Generic placeholder'
            width='140'
            height='140'
          />
          <h3>
            Ronaldo <span className='text-danger'>Oliveira</span>
          </h3>
          <p className='lead'>Diretor</p>
          <p className='text-justify'>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna.
          </p>
          <div className='icons'>
            <a href='/'>
              <i className='fab fa-instagram fa-2x' />
            </a>
            <a href='/'>
              <i className='fab fa-facebook fa-2x' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
