import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

import { Spinner } from '../../Spinner';

export class ModelForm extends Component {
  hair_color_options = ['', 'Loiro', 'Castanho', 'Ruivo', 'Preto', 'Outro'];

  eye_color_options = ['', 'Preto', 'Castanha', 'Azul', 'Verde', 'Outro'];

  estados = [
    '',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];

  render() {
    return (
      <Formik
        initialValues={{
          full_name: '',
          email: '',
          age: '',
          instagram: '',
          cellphone: '',
          state: '',
          city: '',
          model_height: '',
          model_weight: '',
          model_hair_color: '',
          model_eye_color: '',
          model_manequin: '',
          model_shoe_size: ''
        }}
        onSubmit={async (values, actions) => {
          // await this.handleSumbit(values);

          console.log('Waiting...');
          setTimeout(() => {
            console.log('values', values);

            actions.setSubmitting(false);
            actions.resetForm();
          }, 3000);
        }}
        // TODO: Write Yup validation for the form
        // validationSchema={registerSchema}
        render={({ isSubmitting, errors, touched, values }) => (
          <Form>
            <div className='form-group form-row'>
              <div className='col-sm-5 pb-3'>
                {errors.full_name && touched.full_name && <div className='alert alert-danger'>{errors.full_name}</div>}
                <label>Nome Completo:</label>
                <Field className='form-control' type='full_name' name='full_name' placeholder='Nome' />
              </div>
              <div className='col-sm-5 pb-3'>
                {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}
                <label>Email:</label>
                <Field className='form-control' type='email' name='email' placeholder='Email' />
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.age && touched.age && <div className='alert alert-danger'>{errors.age}</div>}
                <label>Idade:</label>
                <Field className='form-control' type='age' name='age' placeholder='Idade' />
              </div>
              <div className='col-sm-3 pb-3'>
                {errors.cellphone && touched.cellphone && <div className='alert alert-danger'>{errors.cellphone}</div>}
                <label>Celular / WhatsApp:</label>
                <Field className='form-control' type='cellphone' name='cellphone' placeholder='Celular / WhatsApp' />
              </div>
              <div className='col-sm-4 pb-3'>
                {errors.instagram && touched.instagram && <div className='alert alert-danger'>{errors.instagram}</div>}
                <label>Instagram:</label>
                <Field className='form-control' type='instagram' name='instagram' placeholder='Instagram' />
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.state && touched.state && <div className='alert alert-danger'>{errors.state}</div>}
                <label>Estado:</label>
                <Field className='form-control' component='select' type='state' name='state' placeholder=''>
                  {this.estados.map(estado => {
                    return (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className='col-sm-3 pb-3'>
                {errors.city && touched.city && <div className='alert alert-danger'>{errors.city}</div>}
                <label>Cidade:</label>
                <Field className='form-control' type='city' name='city' placeholder='Cidade' />
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_height && touched.model_height && (
                  <div className='alert alert-danger'>{errors.model_height}</div>
                )}
                <label>Altura:</label>
                <div className='input-group'>
                  <Field className='form-control' type='model_height' name='model_height' placeholder='Altura' />
                  <div className='input-group-append'>
                    <span className='input-group-text'>cm</span>
                  </div>
                </div>
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_weight && touched.model_weight && (
                  <div className='alert alert-danger'>{errors.model_weight}</div>
                )}
                <label>Peso:</label>
                <div className='input-group'>
                  <Field className='form-control' type='model_weight' name='model_weight' placeholder='Peso' />
                  <div className='input-group-append'>
                    <span className='input-group-text'>kg</span>
                  </div>
                </div>
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_hair_color && touched.model_hair_color && (
                  <div className='alert alert-danger'>{errors.model_hair_color}</div>
                )}
                <label>Cabelos:</label>
                <Field
                  className='form-control'
                  component='select'
                  type='model_hair_color'
                  name='model_hair_color'
                  placeholder=''>
                  {this.hair_color_options.map(option => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_eye_color && touched.model_eye_color && (
                  <div className='alert alert-danger'>{errors.model_eye_color}</div>
                )}
                <label>Olhos:</label>
                <Field
                  className='form-control'
                  component='select'
                  type='model_eye_color'
                  name='model_eye_color'
                  placeholder=''>
                  {this.eye_color_options.map(option => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_manequin && touched.model_manequin && (
                  <div className='alert alert-danger'>{errors.model_manequin}</div>
                )}
                <label>Manequim:</label>
                <Field className='form-control' type='model_manequin' name='model_manequin' placeholder='Manequim' />
              </div>
              <div className='col-sm-2 pb-3'>
                {errors.model_shoe_size && touched.model_shoe_size && (
                  <div className='alert alert-danger'>{errors.model_shoe_size}</div>
                )}
                <label>Sapato:</label>
                <Field className='form-control' type='model_shoe_size' name='model_shoe_size' placeholder='Sapato' />
              </div>
              {isSubmitting ? (
                <div className='offset-10 col-2'>
                  <Spinner style={{ float: 'right', height: '38px', width: '64px' }} />
                </div>
              ) : (
                <div className='offset-10 col-2'>
                  <button className='btn btn-secondary float-right' type='submit' disabled={isSubmitting}>
                    Enviar
                  </button>
                </div>
              )}
            </div>
          </Form>
        )}
      />
    );
  }
}
