import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playerActions } from '../actions';
import './Login.css';
import { Header } from '.';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        first_name: '',
        last_name: '',
        rating: '',
        handedness: 'right'
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { player } = this.state;
    this.setState({
      player: {
        ...player,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { player } = this.state;
    const { dispatch } = this.props;
    console.log(player);
    if (
      player.first_name &&
      player.last_name &&
      player.rating &&
      player.handedness
    ) {
      dispatch(playerActions.create(player));
    }
  }

  render() {
    const { addingPlayer } = this.props;
    const { player, submitted } = this.state;
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
                    <form name="form" onSubmit={this.handleSubmit}>
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            value={player.handedness.toLowerCase()}
                            onChange={this.handleChange}
                            required
                          >
                            <option selected label="Right" id="right">
                              Left
                            </option>
                            <option label="Left" id="left">
                              Right
                            </option>
                          </select>
                        </div>
                        <br />
                        <div className="text-center">
                          <div className="form-group">
                            <button id="create" className="btn btn-primary">
                              Add
                            </button>
                            <Link
                              to="/roster"
                              id="back"
                              className="btn btn-link"
                            >
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
  }
}

function mapStateToProps(state) {
  const { addingPlayer } = state.players;
  return {
    addingPlayer
  };
}

const connectedPlayerPage = connect(mapStateToProps)(PlayerPage);
export { connectedPlayerPage as PlayerPage };
