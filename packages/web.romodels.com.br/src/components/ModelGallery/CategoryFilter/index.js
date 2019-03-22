import React, { Component } from 'react';

export class CategoryFilter extends Component {
  render() {
    return (
      <ul className='nav bg-dark nav-justify justify-content-center text-white'>
        <li className='nav-item'>
          <span style={{ cursor: 'pointer' }} className='nav-link active'>
            Ver Todos
          </span>
        </li>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle text-white'
            data-toggle='dropdown'
            href='/'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'>
            Masculino
          </a>
          <div className='dropdown-menu'>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Fashion
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Comercial
            </span>
          </div>
        </li>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle text-white'
            data-toggle='dropdown'
            href='/'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'>
            Feminino
          </a>
          <div className='dropdown-menu'>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Fashion
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Comercial
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Curve
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Plus Size
            </span>
          </div>
        </li>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle text-white'
            data-toggle='dropdown'
            href='/'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'>
            Infantil
          </a>
          <div className='dropdown-menu'>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Masculino
            </span>
            <span style={{ cursor: 'pointer' }} className='dropdown-item'>
              Feminino
            </span>
          </div>
        </li>
      </ul>
    );
  }
}
