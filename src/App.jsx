import React, { useState } from 'react';
import { Fade } from 'reactstrap';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { clear } from './actions';
import { PrivateRoute, Footer } from './components';
import { RosterPage, PlayerPage, LoginPage, RegisterPage } from './pages';

const App = props => {
  const [fade, setFade] = useState(true);

  const fadeState = () => {
    setFade(!fade);
  };

  const { dispatch } = props;
  history.listen((location, action) => {
    // clear alert on location change
    dispatch(clear());
  });

  const { alert } = props;
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
                <Fade in={fade} transitionappeartimeout="1000">
                  <Route
                    exact
                    path="/"
                    render={fadeState}
                    component={LoginPage}
                  />
                  <PrivateRoute
                    exact
                    path="/roster"
                    render={fadeState}
                    component={RosterPage}
                  />
                  <PrivateRoute
                    exact
                    path="/player/new"
                    render={fadeState}
                    component={PlayerPage}
                  />
                  <Route
                    path="/login"
                    render={fadeState}
                    component={LoginPage}
                  />
                  <Route
                    path="/register"
                    render={fadeState}
                    component={RegisterPage}
                  />
                </Fade>
              </div>
            </Router>
          </div>
        </BrowserRouter>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
