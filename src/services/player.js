import { generateAuthHeader, handleResponse } from '../helpers';

var players = {
  players: []
};

//Replaced all functions with async functions to mock api calls
export const getAllService = async => {
  const requestOptions = {
    method: 'GET',
    headers: generateAuthHeader()
  };
  // if (getLocalPlayers() !== null) {
  //   players = [...getLocalPlayers()];
  // }

  return players;
  // return fetch(`get all api here`, requestOptions).then(handleResponse);
};

export const delService = async id => {
  const requestOptions = {
    method: 'DELETE',
    headers: generateAuthHeader()
  };
  players.players.splice(id, 1);
  //createLocalPlayers(players);
  return players;
  // return fetch(`del api here`, requestOptions).then(handleResponse);
};

export const createService = player => {
  const headers = Object.assign(generateAuthHeader(), {
    'Content-Type': 'application/json'
  });

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(player)
  };
  if (players.players !== undefined) {
    player.id = players.players.length;
  } else {
    player.id = 0;
  }
  players.players.push(player);
  //createLocalPlayers(players);
  return players;
  // return fetch(`create player api here`, requestOptions).then(handleResponse);
};

const getLocalPlayers = () => {
  return localStorage.getItem('players');
};

const createLocalPlayers = players => {
  localStorage.setItem('players', players);
};
