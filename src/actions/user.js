import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions, authActions } from '.';
import { history } from '../helpers';

export const userActions = {
  create,
  submitLogin
};

function userCreateRequest(user) {
  return { type: userConstants.CREATE_REQUEST, user };
}
function userCreateSuccess(user) {
  return { type: userConstants.CREATE_SUCCESS, user };
}
function userCreateFailure(error) {
  return { type: userConstants.CREATE_FAILURE, error };
}

function create(user) {
  return dispatch => {
    dispatch(userCreateRequest(user));

    userService.create(user).then(
      newUser => {
        dispatch(userCreateSuccess(newUser));
        history.push('/roster');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(userCreateFailure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function submitLogin(user) {
  return dispatch => {
    userActions
      .create(user)
      .then(dispatch(authActions.login(user.email, user.password)));
  };
}
