import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/'>
          PlayFaded
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/download' className='nav-link'>
                Download
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/rankings' className='nav-link'>
                Rankings
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/forum' className='nav-link'>
                Forum
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
