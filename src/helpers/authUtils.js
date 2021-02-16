import { handleResponse } from '.';

export const authUtils = {
  login,
  logout
};

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
    // body: {
    //   email: 'test@test.com',
    //   password: '123'
    // }
  };
  // body: {
  //   success: true,
  //   token:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjI0ZGFkYTMxMGQyMTdmZjM5MDEyYzAiLCJpYXQiOjE1MjkxNDE5Nzh9.Tm6dylTEN0mbx4Rxo5zDcS9Jo2yQx4zB0AxyxHiOdlc',
  //   user: {
  //     first_name: 'Kenny',
  //     last_name: 'Hite',
  //     email: 'test@test.com',
  //     id: '5b24dada310d217ff39012c0',
  //     password: '123'
  //   }
  //body: JSON.stringify({ email, password })
  // setToken(requestOptions);
  // return requestOptions;

  return fetch(
    `https://players-api.developer.alchemy.codes/api/login`,
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

// remove user from local storage to log user out
export function logout() {
  localStorage.removeItem('user');
}

// checks if their is a user item in local storage
function isLoggedIn() {
  return localStorage.getItem('user');
}

// store user details and jwt token in local storage to keep user logged in between page refreshes
function setToken(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
