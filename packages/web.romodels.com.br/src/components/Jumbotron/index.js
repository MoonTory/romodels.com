import React from 'react';

export function Jumbotron() {
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
          backgroundSize: 'cover',
          backgroundPositionY: '50%',
          zIndex: '-1'
        }}>
        <div className='view overlay' style={{ background: 'rgba(70, 70, 70, 0.75)', zIndex: '2', paddingBottom: '1rem' }}>
          <h1 className='display-3'>PlayFaded</h1>
          <p className='lead' style={{ marginBottom: '0' }}>
            Welcome to the dankest nostalgic server you will ever come by. Find your style with the lastest NX, compete your way to the top
            with our Seasonal rankings & alternative gamemode!
          </p>
        </div>
      </div>
    </div>
  );
}
