import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './scss/index.scss';

export function Sidebar({ match: { url } }) {
  return (
    <Fragment>
      <div className='float-left collapse width show' id='sidebar'>
        <div className='list-group border-0 card text-center text-md-left'>
          <div className='list-group-item d-inline-block collapsed sidebar-item'>
            <Link to={`${url}`} className='fas fa-home' />{' '}
            <Link to={`${url}`} className='d-none d-md-inline'>
              Home
            </Link>
          </div>
          <div className='list-group-item d-inline-block collapsed sidebar-item'>
            <Link to={`${url}/casting`} className='fas fa-users' />{' '}
            <Link to={`${url}/casting`} className='d-none d-md-inline'>
              Casting
            </Link>
          </div>
          <div className='list-group-item d-inline-block collapsed sidebar-item'>
            <Link to={`${url}/config`} className='fas fa-cog' />{' '}
            <Link to={`${url}/config`} className='d-none d-md-inline'>
              Configuracoes
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
