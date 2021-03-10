import React from 'react';
import { Fade } from 'reactstrap';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { alertActions } from '../actions';
import {
  RosterPage,
  PrivateRoute,
  PlayerPage,
  LoginPage,
  RegisterPage,
  Footer
} from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    const { alert } = this.props;
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
                  <Fade in={this.state.fadeIn} transitionappeartimeout="1000">
                    <Route
                      exact
                      path="/"
                      render={this.toggle}
                      component={LoginPage}
                    />
                    <PrivateRoute
                      exact
                      path="/roster"
                      render={this.toggle}
                      component={RosterPage}
                    />
                    <PrivateRoute
                      exact
                      path="/player/new"
                      render={this.toggle}
                      component={PlayerPage}
                    />
                    <Route
                      path="/login"
                      render={this.toggle}
                      component={LoginPage}
                    />
                    <Route
                      path="/register"
                      render={this.toggle}
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
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
