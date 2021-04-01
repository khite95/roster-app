/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Fade } from 'reactstrap';
import {
  BrowserRouter,
  Switch,
  Router,
  Route,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { clear } from './actions';
import { PrivateRoute } from './components';
import { RosterPage, PlayerPage, LoginPage, RegisterPage } from './pages';

const App = (props: { dispatch: any }) => {
  const { dispatch } = props;
  // history.listen(() => {
  //   // clear alert on location change
  //   dispatch(clear());
  // });

  // const { alert } = props;
  return (
    <div className="container">
      <div className="text-center">
        {/* Alerts */}
        {/* {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )} */}
        <BrowserRouter>
          <div>
            <Router history={history}>
              <div>
                <Route exact path="/" component={LoginPage} />
                <PrivateRoute exact path="/roster" component={RosterPage} />
                <PrivateRoute exact path="/player/new" component={PlayerPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
              </div>
            </Router>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { alert: any }) => {
  const { alert } = state;
  return {
    alert
  };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
