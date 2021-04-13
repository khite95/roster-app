/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { alertConstants } from '../constants';

export const alert = (state = {}, action: { type: any; message: any }) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
