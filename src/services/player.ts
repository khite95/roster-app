import { AnyARecord } from 'node:dns';
import { generateAuthHeader, handleResponse } from '../helpers';

const playerList: any = {
  players: [
    {
      submitted: false,
      first_name: 'John',
      last_name: 'Smith',
      rating: '10',
      handedness: 'Right',
      id: 0
    },
    {
      submitted: false,
      first_name: 'Rob',
      last_name: 'Stark',
      rating: '1',
      handedness: 'Left',
      id: 1
    },
    {
      submitted: false,
      first_name: 'Ken',
      last_name: 'H',
      rating: '10',
      handedness: 'Right',
      id: 2
    },
    {
      submitted: false,
      first_name: 'Bob',
      last_name: 'Barker',
      rating: '2',
      handedness: 'Left',
      id: 3
    },
    {
      submitted: false,
      first_name: 'Carl',
      last_name: 'Sanya',
      rating: '3',
      handedness: 'Right',
      id: 4
    }
  ]
};

//Replaced all functions with async functions to mock api calls
export const getAllService = (async?: any) => {
  const requestOptions = {
    method: 'GET',
    headers: generateAuthHeader()
  };
  // if (getLocalPlayers() !== null) {
  //   players = [...getLocalPlayers()];
  // }

  return playerList;
  // return fetch(`get all api here`, requestOptions).then(handleResponse);
};

export const delService = async (id: number) => {
  const requestOptions = {
    method: 'DELETE',
    headers: generateAuthHeader()
  };
  playerList.players.splice(id, 1);
  //createLocalPlayers(players);
  return playerList;
  // return fetch(`del api here`, requestOptions).then(handleResponse);
};

export const createService = (player: any) => {
  const headers = Object.assign(generateAuthHeader(), {
    'Content-Type': 'application/json'
  });

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(player)
  };
  if (playerList.players !== undefined) {
    player.id = playerList.players.length;
  } else {
    player.id = 0;
  }
  playerList.players.push(player);
  //createLocalPlayers(players);
  return playerList;
  // return fetch(`create player api here`, requestOptions).then(handleResponse);
};

const getLocalPlayers = () => {
  return localStorage.getItem('players');
};

const createLocalPlayers = (playersList: string) => {
  localStorage.setItem('players', playersList);
};
