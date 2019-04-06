import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect as reduxConnect } from 'react-redux';

import { Header, Main, Sidebar } from '../../components';

function IDashboard(props) {
  return (
    <Fragment>
      <Header />
      <Main>
        <Sidebar {...props} />
        <Route exact path={`${props.match.url}`} render={() => <p>Home</p>} />
        <Route exact path={`${props.match.url}/casting`} render={() => <p>Casting</p>} />
        <Route exact path={`${props.match.url}/config`} render={() => <p>Config</p>} />
      </Main>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export const Dashboard = reduxConnect(mapStateToProps, null)(IDashboard);
