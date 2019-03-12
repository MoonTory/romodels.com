import React from 'react';

import './style/index.scss';

export function AboutUs() {
  return (
    <section>
      <div style={{ marginTop: '0', marginBottom: '0', padding: '4rem 0 4rem 0' }} className='container about'>
        <div style={{ marginBottom: '2rem' }} className='row title'>
          <div className='col-lg-12'>
            <h3 className='font-weight-bold'>Nossa Historia</h3>
            <hr />
          </div>
        </div>

        {/*  Begin of Mission Container*/}
        <div className='row'>
          <div className='col-lg-6'>
            <p className='text-justify'>
              Agência e Escola de modelos, especializada a mais de 30 anos na capacitação de profissionais, e oferta de
              seus respectivos talentos ao mercado de trabalho nacional e internacional. Atuante também na Produção de
              eventos e Ações Promocionais.
            </p>
            <br />
            <hr />
            <h4>Servicos</h4>
            <br />
            <ul>
              <li>Escola de Modelos</li>
              <li>Agência de Modelos</li>
              <li>Produção de Eventos</li>
              <li>Ação Promocional</li>
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
