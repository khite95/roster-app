import { handleResponse } from '.';

export const authUtils = {
  login,
  logout
};

async function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  const mockUser = {
    success: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjI0ZGFkYTMxMGQyMTdmZjM5MDEyYzAiLCJpYXQiOjE1MjkxNDIxMTd9.GI4lu7HFB0j3mnsJwX2LjGmGOblUq-X0NnGqD2YRMt0',
    user: {
      first_name: 'Billy',
      last_name: 'Bob',
      email: 'billybob@example.com',
      id: '5b24dada310d217ff39012c0'
    }
  };

  //Used a promise to mock user login and then handle authentication
  Promise.resolve(mockUser)
    // return fetch(
    //   `login api here`,
    //   requestOptions
    // )
    //.then(handleResponse)
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
