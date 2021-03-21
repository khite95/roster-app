import { handleResponse } from '../helpers';

export const createUserService = async user => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  const createdUser = {
    success: true,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjI0ZGFkYTMxMGQyMTdmZjM5MDEyYzAiLCJpYXQiOjE1MjkxNDE5Nzh9.Tm6dylTEN0mbx4Rxo5zDcS9Jo2yQx4zB0AxyxHiOdlc',
    user: {
      first_name: 'Billy',
      last_name: 'Bob',
      email: 'billybob@example.com',
      id: '5b24dada310d217ff39012c0'
    }
  };

  if (createdUser.token) {
    setToken(user);
  }
  return createdUser;

  // return fetch(
  //   `create user api here`,
  //   requestOptions
  // )
  // .then(handleResponse)
  // Promise.resolve(createdUser).then(user => {
  //   // login successful if there's a jwt token in the response
  //   if (user.token) {
  //     setToken(user);
  //   }
  //   return user;
  // });
};

// store user details and jwt token in local storage to keep user logged in between page refreshes
const setToken = user => {
  localStorage.setItem('user', JSON.stringify(user));
};
