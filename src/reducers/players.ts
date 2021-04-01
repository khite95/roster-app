/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { playerConstants } from '../constants';

export const players = (state: any = {}, action: any) => {
  switch (action.type) {
    case playerConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case playerConstants.GETALL_SUCCESS:
      return {
        items: action.players
      };
    case playerConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case playerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to players being deleted
      if (state.items.players === undefined) {
        return {
          ...state,
          items: state.items.map((player: { id: any }) =>
            player.id === action.id ? { ...player, deleting: true } : player
          )
        };
      } else {
        return {
          ...state,
          items: state.items.players.map((player: { id: any }) =>
            player.id === action.id ? { ...player, deleting: true } : player
          )
        };
      }
    // TODO: FIX
    // case playerConstants.DELETE_SUCCESS:
    //   // remove deleted player from state
    //   if (state.items.players === undefined) {
    //     return {
    //       ...state,
    //       items: state.items.filter(player => player.id !== action.id)
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       items: state.filter(player => player.id !== action.id)
    //     };
    //   }
    case playerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to player
      if (state.items.players === undefined) {
        return {
          ...state,
          items: state.items.map(
            (player: { [x: string]: any; id?: any; deleting?: any }) => {
              if (player.id === action.id) {
                // make copy of player without 'deleting:true' property
                const { deleting, ...playerCopy } = player;
                // return copy of player with 'deleteError:[error]' property
                return { ...playerCopy, deleteError: action.error };
              }

              return player;
            }
          )
        };
      } else {
        return {
          ...state,
          items: state.map(
            (player: { [x: string]: any; id?: any; deleting?: any }) => {
              if (player.id === action.id) {
                // make copy of player without 'deleting:true' property
                const { deleting, ...playerCopy } = player;
                // return copy of player with 'deleteError:[error]' property
                return { ...playerCopy, deleteError: action.error };
              }

              return player;
            }
          )
        };
      }
    case playerConstants.CREATE_REQUEST:
      return { addingPlayer: true };
    case playerConstants.CREATE_SUCCESS:
      return {};
    case playerConstants.CREATE_FAILURE:
      return {};
    default:
      return state;
  }
};
