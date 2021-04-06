/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { clear } from './actions';
import { PrivateRoute } from './components';
import { RosterPage, PlayerPage, LoginPage, RegisterPage } from './pages';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const SnackBarAlert = (props: any) => {
  return <MuiAlert elevation={6} variant="standard" {...props} />;
};

const App = (props: { dispatch: any; alert: any }) => {
  const [open, setOpen] = useState(false);
  const { dispatch } = props;
  const { alert } = props;
  // history.listen(() => {
  //   // clear alert on location change
  //   dispatch(clear());
  // });

  console.log(alert.message);
  return (
    <div className="container">
      <div className="text-center">
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
        {alert.message && (
          <React.Fragment>
            <Snackbar open={open} autoHideDuration={1000}>
              <SnackBarAlert severity="success">{alert.message}</SnackBarAlert>
            </Snackbar>
          </React.Fragment>
        )}
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
