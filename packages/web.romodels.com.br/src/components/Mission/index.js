import React from 'react';

import './style/index.scss';

export function Mission() {
  return (
    <section className='bg-dark text-white'>
      <div style={{ padding: '4rem 0 4rem 0' }} className='container mission'>
        <div style={{ marginBottom: '2rem' }} className='row title'>
          <div className='col-lg-12'>
            <h3 className='font-weight-bold'>Missao & Visao</h3>
            <hr style={{ borderColor: 'white' }} />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mission-item'>
            <i className='fas fa-atlas fa-8x' />
            <h4 style={{ padding: '1.5rem 0 1.5rem 0' }}>Missao</h4>
            <p className='text-justify'>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
              ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
              commodo cursus magna.
            </p>
          </div>
          <div className='col-md-6 mission-item'>
            <i className='fas fa-eye fa-8x' />
            <h4 style={{ padding: '1.5rem 0 1.5rem 0' }}>Visao</h4>
            <p className='text-justify'>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
              ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
              commodo cursus magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
