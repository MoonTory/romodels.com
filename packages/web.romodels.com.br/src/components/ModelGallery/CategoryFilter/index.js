import React from 'react';

export function CategoryFilter({ children }) {
  return (
    <div>
      <ul
        style={{ marginBottom: '2rem' }}
        className="nav bg-primary nav-justify justify-content-center text-white"
      >
        <li className="nav-item">
          <span style={{ cursor: 'pointer' }} className="nav-link ">
            Ver Todos
          </span>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            data-toggle="dropdown"
            href="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Masculino
          </a>
          <div className="dropdown-menu">
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Fashion
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Comercial
            </span>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            data-toggle="dropdown"
            href="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Feminino
          </a>
          <div className="dropdown-menu">
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Fashion
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Comercial
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Curve
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Plus Size
            </span>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            data-toggle="dropdown"
            href="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Infantil
          </a>
          <div className="dropdown-menu">
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Todos
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Masculino
            </span>
            <span style={{ cursor: 'pointer' }} className="dropdown-item">
              Feminino
            </span>
          </div>
        </li>
      </ul>
      {children}
      <div style={{ padding: '2rem' }} className="container text-center">
        <a href="/">
          <i className="fas fa-plus-circle fa-3x" />
        </a>
      </div>
    </div>
  );
}
