import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { LoginForm } from '../../components';
import logo from '../../assets/images/logo.svg';
import './scss/login.scss';

export class LoginPage extends Component {
  state = {
    redirect: false
  };

  handleSubmit = redirect => {
    this.setState({ redirect });
  };

  render() {
    return (
      <Fragment>
        {this.state.redirect ? (
          <Redirect from='/' to='/dashboard' />
        ) : (
          <div className='login-body'>
            <div className='text-center'>
              <img src={logo} alt='logo' width='300' height='175' />
              <LoginForm onSubmit={this.handleSubmit} />
              <p className='mt-5 mb-3 text-muted'>
                Copyright &copy; 2019 - Ronaldo Oliveira Models, School & Production
              </p>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
