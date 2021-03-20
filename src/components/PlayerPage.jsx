import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playerActions } from '../actions';
import './Login.css';
import { Header } from '.';

const PlayerPage = props => {
  const [player, setPlayer] = useState({
    player: {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: ''
    },
    submitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPlayer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlayer(prevState => ({
      ...prevState,
      submitted: true
    }));
    const { dispatch } = props;
    console.log(player);
    if (
      player.first_name &&
      player.last_name &&
      player.rating &&
      player.handedness
    ) {
      dispatch(playerActions.create(player));
    }
  };

  const { addingPlayer } = props;
  return (
    <main>
      <Header />
      <section className="section section-lined section-sm my-0">
        <br />
        <div className="container pt--sm">
          <div className="row justify-content-center">
            <div className="col-lg-13">
              <div className="card shadow border-0">
                <div className="card-body bg-secondary px-lg-5 py-lg-5">
                  <h3>Add Player to Roster</h3>
                  <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <br />
                      <label>First Name</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="First Name"
                          id="firstName"
                          value={player.first_name}
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
                          value={player.last_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>Rating</label>
                      <div className="input-group input-group-alternative">
                        <input
                          type="text"
                          className="form-control"
                          name="rating"
                          placeholder="Rating"
                          id="rating"
                          value={player.rating}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <br />
                      <label>Handedness</label>
                      <div className="input-group input-group-alternative">
                        <select
                          type="select"
                          name="handedness"
                          className="form-control"
                          size=""
                          id="handedness"
                          value={player.handedness}
                          onChange={handleChange}
                          required
                        >
                          <option label="" id="empty"></option>
                          <option defaultvalue label="Right" id="right">
                            Right
                          </option>
                          <option label="Left" id="left">
                            Left
                          </option>
                        </select>
                      </div>
                      <br />
                      <div className="text-center">
                        <div className="form-group">
                          <button id="create" className="btn btn-primary">
                            Add
                          </button>
                          <Link to="/roster" id="back" className="btn btn-link">
                            Back
                          </Link>
                          {addingPlayer && (
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

function mapStateToProps(state) {
  const { addingPlayer } = state.players;
  return {
    addingPlayer
  };
}

const connectedPlayerPage = connect(mapStateToProps)(PlayerPage);
export { connectedPlayerPage as PlayerPage };
