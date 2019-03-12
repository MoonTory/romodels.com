import React from 'react';

import './style/index.scss';

export function Services() {
  return (
    <div className='container'>
      <hr className='featurette-divider' />

      <div className='row featurette'>
        <div className='col-md-7'>
          <h2 className='featurette-heading'>Agência de Modelos</h2>
          <p className='lead'>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
          <br />
          <ul>
            <li>Desfiles Comerciais</li>
            <li>Desfiles Fashion</li>
            <li>Showroom</li>
            <li>Trunk Show</li>
            <li>Vitrine Viva</li>
          </ul>
        </div>
        <div className='col-md-5'>
          <img
            className='featurette-image img-fluid mx-auto'
            src='http://placehold.it/500x500'
            alt='Generic placeholder'
          />
        </div>
      </div>

      <hr className='featurette-divider' />

      <div className='row featurette'>
        <div className='col-md-7 order-md-2'>
          <h2 className='featurette-heading'>Produção de Eventos</h2>
          <p className='lead'>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
          <br />
          <ul>
            <li>Desfiles</li>
            <li>Showroom</li>
            <li>Trunk Show</li>
            <li>Inauguracao de loja</li>
            <li>Lancamento de colecao</li>
            <li>Corporativo</li>
            <li>Social</li>
          </ul>
        </div>
        <div className='col-md-5 order-md-1'>
          <img
            className='featurette-image img-fluid mx-auto'
            src='http://placehold.it/500x500'
            alt='Generic placeholder'
          />
        </div>
      </div>

      <hr className='featurette-divider' />

      <div className='row featurette'>
        <div className='col-md-7'>
          <h2 className='featurette-heading'>Ação Promocional</h2>
          <p className='lead'>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
          <br />
          <ul>
            <li>Escola de Modelos</li>
            <li>Agência de Modelos</li>
            <li>Produção de Eventos</li>
            <li>Ação Promocional</li>
          </ul>
        </div>
        <div className='col-md-5'>
          <img
            className='featurette-image img-fluid mx-auto rounded'
            src='http://placehold.it/500x500'
            alt='Generic placeholder'
          />
        </div>
      </div>
      <br />
    </div>
  );
}
