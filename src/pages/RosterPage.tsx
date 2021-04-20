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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';

const RosterPage = (props: {
  getAllPlayers?: any;
  handleDeletePlayer?: any;
  players?: any;
}) => {
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
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: '#3f51b5' }}
          >
            <PeopleOutlineOutlinedIcon />
          </Avatar>
          <Typography
            className={classes.typography}
            component="h1"
            variant="h4"
          >
            Roster
          </Typography>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
              {players.players && (
                <React.Fragment>
                  {players.players.map(
                    (
                      player: {
                        first_name: string;
                        last_name: string;
                        rating: number;
                        handedness: string;
                        id: number;
                      },
                      index: number
                    ) => (
                      <Grid item key={player.last_name} xs={12} sm={6} md={4}>
                        <Player
                          key={player.last_name}
                          playerProp={player}
                          handleDeletePlayer={() => {
                            // this.props.handleDeletePlayer(player.id);
                            // Using the last name as a key to delete from table
                            props.handleDeletePlayer(player.last_name);
                          }}
                          index={index}
                        />
                      </Grid>
                    )
                  )}
                </React.Fragment>
              )}
            </Grid>
          </Container>
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state: { players: any }) => {
  const { players } = state;
  return {
    players
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleDeletePlayer: (id: number) => {
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
