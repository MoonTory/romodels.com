import React from 'react';

import { ModelForm } from '../../components/FormikStrap/ModelForm';

export function FacaParte() {
  return (
    <div style={{ marginTop: '4rem' }} className='container'>
      <div style={{ marginBottom: '2rem' }} className='row'>
        <div className='col-lg-12'>
          <h3 className='font-weight-bold'>Quer ser Modelo?</h3>
          <hr />
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores officia autem corrupti soluta
            sapiente vitae consequuntur reprehenderit impedit culpa repudiandae laborum, ipsam, sed provident?
            Assumenda, ea. Quae, voluptates consectetur?
          </p>
          <br />
          <h4>Importante!</h4>
          <br />
          <p className='text-justify'>
            Completa o formulario abaixo com as informacoes necessarias onde posteriormente entraremos em contato, junto
            com o formulario, por favor envie 2 fotos de rosto e corpo inteiro, não necessariamente profissionais, mas
            que sejam simples e representativas, sem muita maquiagem ou acessórios como óculos escuros. Informe todas as
            suas medidas para que possamos ter seu cadastro completo.
          </p>
        </div>
      </div>

      <br />

      <div className='row'>
        <div className='col-lg-12'>
          <h3 className='font-weight-bold'>Formulário</h3>
          <hr />
        </div>
        <div style={{ paddingBottom: '4rem' }} className='col-lg-12'>
          <ModelForm />
        </div>
      </div>
    </div>
  );
}
