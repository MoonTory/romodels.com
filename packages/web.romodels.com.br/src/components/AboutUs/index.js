import React from 'react';

import './style/index.scss';

export function AboutUs() {
  return (
    <section>
      <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }} className='container about'>
        <h3 className='font-weight-bold'>Nossa Historia</h3>
        <hr style={{ marginTop: '0' }} className='featurette-divider' />

        {/*  Begin of Mission Container*/}
        <div className='row'>
          <div className='col-lg-6'>
            <p className='text-justify about-text'>
              Agência e Escola de modelos, especializada a mais de 30 anos na capacitação de profissionais, e oferta de
              seus respectivos talentos ao mercado de trabalho nacional e internacional. Atuante também na Produção de
              eventos e Ações Promocionais.
            </p>
            <h4>Servicos</h4>
            <hr />
            <ul style={{ listStyle: 'none' }}>
              <li>
                <i style={{ paddingRight: '0.5rem' }} className='fas fa-angle-right' />
                Escola de Modelos
              </li>
              <li>
                <i style={{ paddingRight: '0.5rem' }} className='fas fa-angle-right' />
                Agência de Modelos
              </li>
              <li>
                <i style={{ paddingRight: '0.5rem' }} className='fas fa-angle-right' />
                Produção de Eventos
              </li>
              <li>
                <i style={{ paddingRight: '0.5rem' }} className='fas fa-angle-right' />
                Ação Promocional
              </li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <img className='img-fluid rounded' src='http://placehold.it/700x450' alt='' />
          </div>
        </div>
        {/*  End of Mission Container*/}
      </div>
    </section>
  );
}
