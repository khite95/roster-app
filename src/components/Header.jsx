import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export const Header = props => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
      <div className="container">
        <Link className="navbar-brand" to="/roster">
          Player App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-primary"
          aria-controls="navbar-primary"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-primary">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="index.html">
                  <img src="assets/img/brand/blue.png" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-primary"
                  aria-controls="navbar-primary"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/roster">
                Roster
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/player/new">
                Add New Player
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/khite95/roster-app"
              >
                Github
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbar-primary_dropdown_1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Settings
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbar-primary_dropdown_1"
              >
                <Link className="dropdown-item" to="/roster">
                  Roster
                </Link>
                <Link className="dropdown-item" to="/player/new">
                  Add New Player
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/login">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
