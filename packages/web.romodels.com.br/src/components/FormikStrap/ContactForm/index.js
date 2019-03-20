import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class ContactForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: '', email: '', cellphone: '', message: '' }}
        onSubmit={async (values, actions) => {
          // await this.handleSumbit(values);
          console.log('values', values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        // TODO: Write Yup validation for the form
        // validationSchema={registerSchema}
        render={({ isSubmitting, errors, touched, values }) => (
          <Form>
            <div className='form-group'>
              {errors.name && touched.name && <div className='alert alert-danger'>{errors.username}</div>}
              <label>Nome Completo:</label>
              <Field className='form-control' type='name' name='name' placeholder='Nome' />
            </div>
            <div className='form-group'>
              {errors.email && touched.email && <div className='alert alert-danger'>{errors.email}</div>}
              <label>Email:</label>
              <Field className='form-control' type='email' name='email' placeholder='Email' />
            </div>
            <div className='form-group'>
              {errors.cellphone && touched.cellphone && <div className='alert alert-danger'>{errors.cellphone}</div>}
              <label>Celular / WhatsApp:</label>
              <Field className='form-control' type='cellphone' name='cellphone' placeholder='Celular / WhatsApp' />
            </div>
            <div className='form-group'>
              <label>Mensagem:</label>
              <Field
                component='textarea'
                className='form-control'
                rows='10'
                cols='100'
                type='message'
                name='message'
                placeholder='Mensagem....'
              />
            </div>
            {isSubmitting ? null : (
              <button className='btn btn-secondary' style={{ float: 'right' }} type='submit' disabled={isSubmitting}>
                Enviar
              </button>
            )}
          </Form>
        )}
      />
    );
  }
}
