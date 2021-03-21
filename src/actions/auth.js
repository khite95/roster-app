import { authConstants } from '../constants';
import { error } from '.';
import { history, login, logout } from '../helpers';

const authRequest = user => {
  return { type: authConstants.LOGIN_REQUEST, user };
};

const authSuccess = user => {
  return { type: authConstants.LOGIN_SUCCESS, user };
};

const authFailure = error => {
  return { type: authConstants.LOGIN_FAILURE, error };
};

export const loginAction = (email, password) => {
  return async dispatch => {
    dispatch(authRequest({ email }));

    try {
      const user = await login(email, password);
      dispatch(authSuccess(user));
      history.push('/roster');
    } catch (error) {
      dispatch(authFailure(error.toString()));
      dispatch(error(error.toString()));
    }
  };
};

export const logoutAction = () => {
  logout();
  return { type: authConstants.LOGOUT_REQUEST };
};
