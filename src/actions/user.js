import { userConstants } from '../constants';
import { createUserService } from '../services';
import { success, error, loginAction } from '.';
import { history } from '../helpers';

const userCreateRequest = user => {
  return { type: userConstants.CREATE_REQUEST, user };
};

const userCreateSuccess = user => {
  return { type: userConstants.CREATE_SUCCESS, user };
};

const userCreateFailure = error => {
  return { type: userConstants.CREATE_FAILURE, error };
};

export const createUser = user => {
  return async dispatch => {
    dispatch(userCreateRequest(user));

    try {
      const newUser = await createUserService(user);
      dispatch(userCreateSuccess(newUser));
      history.push('/roster');
      dispatch(success('Registration successful'));
    } catch (error) {
      dispatch(userCreateFailure(error.toString()));
      dispatch(error(error.toString()));
    }
  };
};

export const submitLogin = user => {
  return async dispatch => {
    try {
      const submitUser = await createUser(user);
      await dispatch(loginAction(user.email, user.password));
    } catch (error) {
      console.log(error.toString());
    }
  };
};
