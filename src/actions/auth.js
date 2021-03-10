import { authConstants } from '../constants';
import { alertActions } from '.';
import { history, authUtils } from '../helpers';

export const authActions = {
  login,
  logout
};

function authRequest(user) {
  return { type: authConstants.LOGIN_REQUEST, user };
}
function authSuccess(user) {
  return { type: authConstants.LOGIN_SUCCESS, user };
}
function authFailure(error) {
  return { type: authConstants.LOGIN_FAILURE, error };
}

function login(email, password) {
  return async dispatch => {
    dispatch(authRequest({ email }));

    try {
      const user = await authUtils.login(email, password);
      dispatch(authSuccess(user));
      history.push('/roster');
    } catch (error) {
      dispatch(authFailure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }

    // authUtils.login(email, password).then(
    //   user => {
    //     dispatch(authSuccess(user));
    //     console.log(user);
    //     history.push('/roster');
    //   },
    //   error => {
    //     dispatch(authFailure(error.toString()));
    //     dispatch(alertActions.error(error.toString()));
    //   }
    // );
  };
}

function logout() {
  authUtils.logout();
  return { type: authConstants.LOGOUT_REQUEST };
}
