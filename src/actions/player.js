import { playerConstants } from '../constants';
import { getAllService, createService, delService } from '../services';
import { success, error, clear } from '.';
import { history } from '../helpers';

const playerCreateRequest = player => {
  return { type: playerConstants.CREATE_REQUEST, player };
};

const playerCreateSuccess = player => {
  return { type: playerConstants.CREATE_SUCCESS, player };
};

const playerCreateFailure = error => {
  return { type: playerConstants.CREATE_FAILURE, error };
};

const playerGetAllRequest = () => {
  return { type: playerConstants.GETALL_REQUEST };
};

const playerGetAllSuccess = players => {
  return { type: playerConstants.GETALL_SUCCESS, players };
};

const playerGetAllFailure = error => {
  return { type: playerConstants.GETALL_FAILURE, error };
};

const playerDeleteRequest = id => {
  return { type: playerConstants.DELETE_REQUEST, id };
};

const playerDeleteSuccess = id => {
  return { type: playerConstants.DELETE_SUCCESS, id };
};

const playerDeleteFailure = (id, error) => {
  return { type: playerConstants.DELETE_FAILURE, id, error };
};

//Make async call to api, handle promise, dispatch action when promise is resolved
export const getAll = () => {
  return async dispatch => {
    dispatch(playerGetAllRequest());

    try {
      const players = await getAllService();
      dispatch(playerGetAllSuccess(players));
    } catch (error) {
      dispatch(playerGetAllFailure(error.toString()));
    }
  };
};

export const del = id => {
  return async dispatch => {
    dispatch(playerDeleteRequest(id));
    try {
      const deletedPlayer = await delService(id);
      dispatch(playerDeleteSuccess(id));
      dispatch(success('Deleted Player'));
    } catch (error) {
      dispatch(playerDeleteFailure(id, error.toString()));
    }
  };
};

export const create = player => {
  return async dispatch => {
    dispatch(playerCreateRequest(player));

    try {
      const createdPlayer = await createService(player);
      dispatch(playerCreateSuccess());
      history.push('/roster');
      dispatch(success('Added New Player'));
    } catch (error) {
      dispatch(playerCreateFailure(error.toString()));
      dispatch(error(error.toString()));
    }
  };
};
