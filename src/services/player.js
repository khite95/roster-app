import { generateAuthHeader, handleResponse } from '../helpers';

export const playerService = {
  getAll,
  create,
  delete: del
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: generateAuthHeader()
  };

  return fetch(
    `https://players-api.developer.alchemy.codes/api/players`,
    requestOptions
  ).then(handleResponse);
}

function del(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: generateAuthHeader()
  };

  return fetch(
    `https://players-api.developer.alchemy.codes/api/players/${id}`,
    requestOptions
  ).then(handleResponse);
}

function create(player) {
  const headers = Object.assign(generateAuthHeader(), {
    'Content-Type': 'application/json'
  });
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(player)
  };

  return fetch(
    `https://players-api.developer.alchemy.codes/api/players`,
    requestOptions
  ).then(handleResponse);
}
