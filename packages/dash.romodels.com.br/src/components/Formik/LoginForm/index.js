import React, { Component, Fragment } from 'react';
import { Formik, Form, Field } from 'formik';

import { Spinner } from '../../Spinner';

export class LoginForm extends Component {
  handleSumbit = async (data, actions) => {
    const { email, password } = data;
    const test = { email: 'test@test.com', password: 'test' };
    const payload = { email, password };

    setTimeout(() => {
      console.log('payload', payload);
      console.log('test', test);
      actions.resetForm();
      actions.setSubmitting(false);

      if (test.email === payload.email && test.password === payload.password) {
        this.props.onSubmit(true);
      }
    }, 2000);
  };

  render() {
    const { email, password } = this.props;
    return (
      <Formik
        initialValues={{ email: email || '', password: password || '' }}
        onSubmit={async (values, actions) => {
          await this.handleSumbit(values, actions);
        }}
        // validationSchema={loginSchema}
        render={({ isSubmitting }) => (
          <Form className='form-login'>
            <Field className='form-control' type='email' name='email' placeholder='Email' />
            <Field className='form-control' type='password' name='password' placeholder='Password' />
            <br />
            {isSubmitting ? (
              <Spinner style={{ height: '42.5px', width: '64px' }} />
            ) : (
              <button className='btn btn-lg btn-primary btn-block' type='submit' disabled={isSubmitting}>
                Login
              </button>
            )}
          </Form>
        )}
      />
    );
  }
}
