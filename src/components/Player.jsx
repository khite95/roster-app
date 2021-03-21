import React from 'react';
import { playerActions } from '../actions';
import './Component.css';

export const Player = ({ playerProp, handleDeletePlayer, index }) => {
  return (
    <tbody>
      <tr key={playerProp.first_name}>
        <th scope="row">{index}</th>
        <td>{playerProp.first_name}</td>
        <td>{playerProp.last_name}</td>
        <td>{playerProp.rating}</td>
        <td>{playerProp.handedness}</td>
        <td>{playerProp.id}</td>
        <td id="delete" className="delete">
          <a onClick={handleDeletePlayer}>Delete</a>
        </td>
      </tr>
    </tbody>
  );
};
