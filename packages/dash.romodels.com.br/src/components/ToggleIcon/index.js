import React, { Fragment } from 'react';

import './scss/toggle-icon.scss';

export function ToggleIcon({ mobile, both, dataTarget, dataToggle }) {
  return (
    <Fragment>
      {mobile === true ? (
        <a className='toggle-icon-mobile' href='' data-toggle={dataToggle} data-target={dataTarget}>
          <i className='fas fa-bars fa-2x px-4' />
        </a>
      ) : null}
      {both === true ? (
        <Fragment>
          <a className='toggle-icon' href='' data-toggle={dataToggle} data-target={dataTarget}>
            <i className='fas fa-bars fa-2x px-4' />
          </a>
          <a className='toggle-icon-mobile' href='' data-toggle={dataToggle} data-target={dataTarget}>
            <i className='fas fa-bars fa-2x px-4' />
          </a>
        </Fragment>
      ) : null}
      {mobile === (false || undefined) && both === (false || undefined) ? (
        <a className='toggle-icon' href='' data-toggle={dataToggle} data-target={dataTarget}>
          <i className='fas fa-bars fa-2x px-4' />
        </a>
      ) : null}
    </Fragment>
  );
}
