import { userConstants } from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.CREATE_REQUEST:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.CREATE_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.CREATE_FAILURE:
      return {};
    default:
      return state;
  }
}
