import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect as reduxConnect } from 'react-redux';

import { LoginForm } from '../../components';
import logo from '../../assets/images/logo.svg';
import './scss/login.scss';

class ILoginPage extends Component {
  state = {
    redirect: false
  };

  handleFormSubmit = submitted => {
    if (submitted) {
      if (this.props.isAuthenticated) {
        this.setState({ redirect: true });
      }
    }
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
              <LoginForm onSubmit={this.handleFormSubmit} />
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

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export const LoginPage = reduxConnect(mapStateToProps, null)(ILoginPage);
