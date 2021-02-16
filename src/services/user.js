import { handleResponse } from '../helpers';

export const userService = {
  create
};

function create(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(
    `https://players-api.developer.alchemy.codes/api/user`,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        setToken(user);
      }
      return user;
    });
}

// store user details and jwt token in local storage to keep user logged in between page refreshes
function setToken(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
