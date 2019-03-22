import React from 'react';
import { Link } from 'react-router-dom';

import './style/footer.scss';

export function Footer({ children }) {
  return (
    <footer className='py-5 bg-dark footer'>
      <div className='container'>
        <div className='row text-white'>
          <div className='col-lg-3'>
            <Link to='/'>
              <img alt='' src='assets/logo_white.svg' width='200' height='200' />
            </Link>
          </div>
          <div className='col-lg-3 footer-item'>
            <h5>Endereco</h5>
            <p className='font-weight-lighter'>
              Av. T-02, Qd. 75, Lt. 14, n 744 - St. Bueno, Goiânia - GO, 74215-010, Brazil
            </p>
          </div>
          <div className='col-lg-3 footer-item'>
            <h5>Contatos</h5>
            <div>
              <i className='far fa-envelope' />
              <p className='font-weight-lighter d-inline'> romodels@gmail.com</p>
            </div>
            <div>
              <i className='fab fa-whatsapp' />
              <p className='font-weight-lighter d-inline'> (62) 98418-2482</p>
            </div>
          </div>
          <div className='col-lg-3 footer-item social'>
            <h5>Media Social</h5>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='https://www.instagram.com/ronaldooliveiramodels/'>
                  <i className='fab fa-instagram fa-2x' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='https://www.instagram.com/ronaldooliveiramodels/'>
                  <i className='fab fa-facebook fa-2x' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='https://www.instagram.com/ronaldooliveiramodels/'>
                  <i className='fab fa-youtube fa-2x' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container'>
        <hr style={{ borderColor: 'white' }} />
        <div className='row justify-content-between'>
          <div className='col-md-6'>
            <p className='text-white font-weight-lighter'>
              Copyright &copy; 2019 - Ronaldo Oliveira Models, School & Production
            </p>
          </div>
          <div className='col-md-4 text-white font-weight-lighter social madeby'>
            <p className='font-weight-lighter'>
              Developed by Gustavo Quinta -{' '}
              <a href='https://github.com/moontory'>
                <i className='fab fa-github' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
