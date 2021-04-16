import React from 'react';
import { useStyles } from '../styles';
import Avatar from '@material-ui/core/Avatar';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface PlayerProps {
  playerProp: {
    first_name: string;
    last_name: string;
    rating: number;
    handedness: string;
    id: number;
  };
  handleDeletePlayer:
    | (React.MouseEventHandler<HTMLTableHeaderCellElement> &
        React.MouseEventHandler<HTMLTableDataCellElement>)
    | undefined;
  index: number;
  key?: React.Key | number | null | undefined;
}

export const Player = ({
  playerProp,
  handleDeletePlayer,
  index
}: PlayerProps): JSX.Element => {
  const classes = useStyles();
  // Using the last name as a key to delete from table
  return (
    <React.Fragment>
      <TableRow key={playerProp.last_name}>
        <TableCell component="th" scope="row">
          {index}
        </TableCell>
        <TableCell align="center">{playerProp.first_name}</TableCell>
        <TableCell align="center">{playerProp.last_name}</TableCell>
        <TableCell align="center">{playerProp.rating}</TableCell>
        <TableCell align="center">{playerProp.handedness}</TableCell>
        <TableCell align="center">{playerProp.id}</TableCell>
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
    </React.Fragment>
  );
};
