import React from 'react';
import { useStyles } from '../styles';
import Avatar from '@material-ui/core/Avatar';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Player = ({ playerProp, handleDeletePlayer, index }) => {
  const classes = useStyles();
  return (
    <TableRow key={playerProp.first_name}>
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell align="right">{playerProp.first_name}</TableCell>
      <TableCell align="right">{playerProp.last_name}</TableCell>
      <TableCell align="right">{playerProp.rating}</TableCell>
      <TableCell align="right">{playerProp.handedness}</TableCell>
      <TableCell align="right">{playerProp.id}</TableCell>
      <TableCell
        align="right"
        id="delete"
        className="delete"
        onClick={handleDeletePlayer}
      >
        <Avatar className={classes.avatar}>
          <DeleteOutlineOutlinedIcon />
        </Avatar>
      </TableCell>
    </TableRow>
  );
};
