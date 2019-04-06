import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect as reduxConnect } from 'react-redux';

// Redux Actions
import { loginUser } from '../../../lib/redux/actions/auth';

import { Spinner } from '../../Spinner';

class ILoginForm extends Component {
  handleSumbit = async (data, actions) => {
    const { email, password } = data;
    const payload = { email, password };

    await this.props.loginUser(payload);

    actions.setSubmitting(false);
    actions.resetForm();

    this.props.onSubmit(true);
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
            {this.props.loginError ? <div className='alert alert-danger'>{this.props.loginError}</div> : null}
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

function mapStateToProps(state) {
  return {
    loginError: state.auth.loginError
  };
}

export const LoginForm = reduxConnect(mapStateToProps, { loginUser })(ILoginForm);
