import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { playerActions } from '../actions';
import { Header, Player } from '.';
import './Login.css';

const RosterPage = props => {
  useEffect(() => {
    props.getAllPlayers();
  }, []);

  const { players } = props;
  return (
    <main>
      <Header />
      <section className="section section-lined section-sm my-0">
        <br />
        <div className="container pt--lg">
          <div className="row justify-content-center">
            <div className="col-lg-13">
              <div className="card shadow border-0">
                <div className="card-body bg-secondary px-lg-5 py-lg-5">
                  <h2>Player Roster</h2>
                  <br />
                  <div className="form-group mb-3">
                    {players.items && (
                      <Table hover>
                        <thead>
                          <tr key="Players">
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Rating</th>
                            <th>Handedness</th>
                            <th>Player id</th>
                          </tr>
                        </thead>
                        {players.items.players &&
                          players.items.players.map((player, index) => (
                            <Player
                              key={player.first_name}
                              playerProp={player}
                              handleDeletePlayer={() => {
                                //this.props.handleDeletePlayer(player.id);
                                //use index instead since we are mocking data from api
                                props.handleDeletePlayer(index);
                                props.getAllPlayers();
                              }}
                              index={index}
                            />
                          ))}
                      </Table>
                    )}
                  </div>
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
  const { players } = state;
  return {
    players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDeletePlayer: id => {
      dispatch(playerActions.delete(id));
    },
    getAllPlayers: () => {
      dispatch(playerActions.getAll());
    }
  };
}

const connectedRosterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterPage);
export { connectedRosterPage as RosterPage };
