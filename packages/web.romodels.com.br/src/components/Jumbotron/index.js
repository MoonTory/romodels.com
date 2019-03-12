import React from 'react';

import BannerImage from '../../assets/unsplashed.jpg';

export function Jumbotron(props) {
  return (
    <div
      style={{
        borderBottom: 'solid 2px #444',
        borderRadius: '0',
        marginBottom: '0'
      }}
      className='jumbotron jumbotron-fluid p-0 text-white bg-dark text-center'>
      <div
        className='view overlay'
        style={{
          background: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPositionY: '25%',
          zIndex: '-1'
        }}>
        <div
          className='view overlay'
          style={{ background: 'rgba(236, 238, 236, 0.7)', zIndex: '2', padding: '1rem 0 1rem 0' }}>
          <img alt='' src='assets/logo.svg' width='225' height='225' />
          {props.hasText === undefined ? null : (
            <p className='lead text-white' style={{ marginBottom: '0' }}>
              {props.heroText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
