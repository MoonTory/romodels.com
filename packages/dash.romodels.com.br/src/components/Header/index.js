import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ToggleIcon } from '../ToggleIcon';
import logo_small from '../../assets/images/logo_small.svg';

export function Header() {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-md navbar-dark bg-secondary text-white'>
        <ToggleIcon both={true} dataToggle='collapse' dataTarget='#sidebar' />
        <Link className='navbar-brand' to='/dashboard' title='Ronaldo Oliveira Models School & Production'>
          <img alt='logo_small' src={logo_small} width='30' height='30' />
        </Link>

        <ToggleIcon mobile={true} dataToggle='collapse' dataTarget='#collapsingNavbar' />
        <div className='navbar-collapse collapse' id='collapsingNavbar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href=''>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
