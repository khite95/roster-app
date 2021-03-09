import { generateAuthHeader, handleResponse } from '../helpers';

export const playerService = {
  getAll,
  create,
  delete: del
};

//Replaced all functions with async functions to mock api calls
async function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: generateAuthHeader()
  };

  const getMockPlayers = {
    success: true,
    players: [
      {
        first_name: 'Harry',
        last_name: 'Potter',
        rating: 9000,
        handedness: 'right',
        id: '5b24dd30310d217ff39012c1'
      },
      {
        first_name: 'Hermione',
        last_name: 'Granger',
        rating: 9999,
        handedness: 'right',
        id: '5b24de43310d217ff39012c2'
      },
      {
        first_name: 'Ron',
        last_name: 'Weasley',
        rating: 8000,
        handedness: 'left',
        id: '5b24de63310d217ff39012c3'
      },
      {
        first_name: 'Tom',
        last_name: 'Riddle',
        rating: 8000,
        handedness: 'left',
        id: '5b24deb1310d217ff39012c4'
      }
    ]
  };

  //Promise.resolve(getMockPlayers);
  return getMockPlayers;
  // return fetch(`get all api here`, requestOptions).then(handleResponse);
}

async function del(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: generateAuthHeader()
  };

  const getMockDeletedPlayer = {
    success: true,
    players: [
      {
        first_name: 'Hermione',
        last_name: 'Granger',
        rating: 9999,
        handedness: 'right',
        id: '5b24de43310d217ff39012c2'
      },
      {
        first_name: 'Ron',
        last_name: 'Weasley',
        rating: 8000,
        handedness: 'left',
        id: '5b24de63310d217ff39012c3'
      },
      {
        first_name: 'Tom',
        last_name: 'Riddle',
        rating: 8000,
        handedness: 'left',
        id: '5b24deb1310d217ff39012c4'
      }
    ]
  };

  //Promise.resolve(getMockDeletedPlayer);

  return getMockDeletedPlayer;
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

  const createMockPlayer = {
    success: true,
    player: {
      first_name: 'Tom',
      last_name: 'Riddle',
      rating: 8000,
      handedness: 'left',
      id: '5b24deb1310d217ff39012c4'
    }
  };

  //Promise.resolve(createMockPlayer);

  return createMockPlayer;
  // return fetch(`create player api here`, requestOptions).then(handleResponse);
}
