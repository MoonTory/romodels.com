import React from 'react';

import { Jumbotron, Map } from '../../components';
import { ContactForm } from '../../components/Formik/ContactForm';

export function Contact() {
  return (
    <div>
      <Jumbotron />
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mb-4'>
            <Map />
          </div>

          <div className='col-lg-4 mb-4'>
            <h3 className='font-weight-bold text-center'>Contatos</h3>
            <hr />
            <div className=''>
              <p>Endereço: Av. T-02, Qd. 75, Lt. 14, n 744 - St. Bueno, Goiânia - GO, 74215-010, Brazil</p>
              <p>Email: romodels@gmail.com</p>
              <p>Telefone: (62) 98418-2482</p>
            </div>
          </div>
        </div>
        <br />
        <h3 className='font-weight-bold'>Fale Conosco</h3>
        <hr />
        <div className='row'>
          <div className='col-lg-8'>
            <ContactForm />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
