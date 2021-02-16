import { playerConstants } from '../constants';
import { playerService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const playerActions = {
  getAll,
  create,
  delete: del
};

function playerCreateRequest(player) {
  return { type: playerConstants.CREATE_REQUEST, player };
}
function playerCreateSuccess(player) {
  return { type: playerConstants.CREATE_SUCCESS, player };
}
function playerCreateFailure(error) {
  return { type: playerConstants.CREATE_FAILURE, error };
}

function playerGetAllRequest() {
  return { type: playerConstants.GETALL_REQUEST };
}
function playerGetAllSuccess(players) {
  return { type: playerConstants.GETALL_SUCCESS, players };
}
function playerGetAllFailure(error) {
  return { type: playerConstants.GETALL_FAILURE, error };
}

function playerDeleteRequest(id) {
  return { type: playerConstants.DELETE_REQUEST, id };
}
function playerDeleteSuccess(id) {
  return { type: playerConstants.DELETE_SUCCESS, id };
}
function playerDeleteFailure(id, error) {
  return { type: playerConstants.DELETE_FAILURE, id, error };
}

// make async call to api, handle promise, dispatch action when promise is resolved
function getAll() {
  return dispatch => {
    dispatch(playerGetAllRequest());

    playerService
      .getAll()
      .then(
        players => dispatch(playerGetAllSuccess(players)),
        error => dispatch(playerGetAllFailure(error.toString()))
      );
  };
}

function del(id) {
  return dispatch => {
    dispatch(playerDeleteRequest(id));

    playerService.delete(id).then(
      player => {
        dispatch(playerDeleteSuccess(id));
        dispatch(alertActions.success('Deleted Player'));
      },
      error => dispatch(playerDeleteFailure(id, error.toString()))
    );
  };
}

function create(player) {
  return dispatch => {
    dispatch(playerCreateRequest(player));

    playerService.create(player).then(
      player => {
        dispatch(playerCreateSuccess());
        history.push('/roster');
        dispatch(alertActions.success('Added New Player'));
      },
      error => {
        dispatch(playerCreateFailure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}
