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
  return async dispatch => {
    dispatch(userCreateRequest(user));

    try {
      const newUser = await userService.create(user);
      dispatch(userCreateSuccess(newUser));
      history.push('/roster');
      dispatch(alertActions.success('Registration successful'));
    } catch (error) {
      dispatch(userCreateFailure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }

    //   userService.create(user).then(
    //     newUser => {
    //       dispatch(userCreateSuccess(newUser));
    //       history.push('/roster');
    //       dispatch(alertActions.success('Registration successful'));
    //     },
    //     error => {
    //       dispatch(userCreateFailure(error.toString()));
    //       dispatch(alertActions.error(error.toString()));
    //     }
    //   );
    // };
  };
}

function submitLogin(user) {
  return async dispatch => {
    try {
      const submitUser = await create(user);
      await dispatch(authActions.login(user.email, user.password));
    } catch (error) {
      console.log(error.toString());
    }

    // userActions
    //   .create(user)
    //   .then(dispatch(authActions.login(user.email, user.password)));
  };
}
