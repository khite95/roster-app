import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser, submitLogin, authActions } from '../actions';
import './Page.css';

const RegisterPage = props => {
  const [user, setUser] = useState({
    user: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    },
    submitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUser(prevState => ({
      ...prevState,
      submitted: true
    }));
    const { dispatch } = props;
    console.log(user);
    if (
      user.first_name &&
      user.last_name &&
      user.email &&
      user.password &&
      user.confirm_password
    ) {
      dispatch(createUser(user));
    }
  };

  const { registering } = props;
  return (
    <main>
      <section className="section section-lined section-sm my-0">
        <div className="container pt--md">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow border-0">
                <div className="card-body bg-secondary px-lg-5 py-lg-5">
                  <h2>Register</h2>
                  <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <br />
                      <label>Email</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          id="email"
                          value={user.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>First Name</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="First Name"
                          id="firstName"
                          value={user.first_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>Last Name</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          placeholder="Last Name"
                          id="lastName"
                          value={user.last_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>Password</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          id="password"
                          value={user.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>Confirm Password</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="password"
                          className="form-control"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          id="confirmPassword"
                          value={user.confirm_password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <div className="text-center">
                        <div className="form-group">
                          <button id="register" className="btn btn-primary">
                            Register
                          </button>
                          <Link to="/login" id="back" className="btn btn-link">
                            Back
                          </Link>
                          {registering && (
                            <img
                              alt=""
                              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  const { registering } = state.registration;
  return {
    registering
  };
};

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
