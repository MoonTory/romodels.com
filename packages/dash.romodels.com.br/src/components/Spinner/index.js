import React from 'react';

import './scss/index.scss';

export function Spinner({ style }) {
  return (
    <div style={style} className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
