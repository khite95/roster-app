import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { del, getAll } from '../actions';
import { Header, Player } from '../components';
import { useStyles } from '../styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RosterPage = props => {
  useEffect(() => {
    props.getAllPlayers();
  }, []);

  const { players } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PeopleOutlineOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Roster
          </Typography>
          <TableContainer component={Paper} style={{ width: '49%' }}>
            <TableContainer className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Rating</TableCell>
                  <TableCell align="right">Handedness</TableCell>
                  <TableCell align="right">Player ID</TableCell>
                </TableRow>
              </TableHead>
              {players.items && (
                <TableBody>
                  {players.items.players &&
                    players.items.players.map((player, index) => (
                      <Player
                        key={player.first_name}
                        playerProp={player}
                        handleDeletePlayer={() => {
                          //this.props.handleDeletePlayer(player.id);
                          //use index instead since we are mocking data from api
                          props.handleDeletePlayer(index);
                          props.getAllPlayers();
                        }}
                        index={index}
                      />
                    ))}
                </TableBody>
              )}
            </TableContainer>
          </TableContainer>
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { players } = state;
  return {
    players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDeletePlayer: id => {
      dispatch(del(id));
    },
    getAllPlayers: () => {
      dispatch(getAll());
    }
  };
};

const connectedRosterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterPage);
export { connectedRosterPage as RosterPage };
