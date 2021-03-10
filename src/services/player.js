import { generateAuthHeader, handleResponse } from '../helpers';

export const playerService = {
  getAll,
  create,
  delete: del
};

var players = {
  players: []
};

//Replaced all functions with async functions to mock api calls
async function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: generateAuthHeader()
  };
  // if (getLocalPlayers() !== null) {
  //   players = [...getLocalPlayers()];
  // }

  return players;
  // return fetch(`get all api here`, requestOptions).then(handleResponse);
}

async function del(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: generateAuthHeader()
  };
  players.players.splice(id, 1);
  //createLocalPlayers(players);
  return players;
  // return fetch(`del api here`, requestOptions).then(handleResponse);
}

async function create(player) {
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
}

function getLocalPlayers() {
  return localStorage.getItem('players');
}

function createLocalPlayers(players) {
  localStorage.setItem('players', players);
}
