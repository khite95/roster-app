import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { create } from '../actions';
import { Header } from '../components';
import { Copyright } from '../components';
import { useStyles } from '../styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const PlayerPage = props => {
  const [player, setPlayer] = useState({
    player: {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: ''
    },
    submitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPlayer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlayer(prevState => ({
      ...prevState,
      submitted: true
    }));
    const { dispatch } = props;
    console.log(player);
    if (
      player.first_name &&
      player.last_name &&
      player.rating &&
      player.handedness
    ) {
      dispatch(create(player));
    }
  };

  const classes = useStyles();
  const { addingPlayer } = props;
  return (
    <React.Fragment>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Player
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={player.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  value={player.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="rating"
                  label="Rating"
                  name="rating"
                  autoComplete="rating"
                  value={player.rating}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="handedness">Handedness</InputLabel>
                  <Select
                    labelId="handedness"
                    id="handedness"
                    value={player.handedness}
                    onChange={handleChange}
                    label="Handedness"
                    name="handedness"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value="Left">Left</MenuItem>
                    <MenuItem value="Right">Right</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/roster" id="roster" variant="body2">
                  Back
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { addingPlayer } = state.players;
  return {
    addingPlayer
  };
};

const connectedPlayerPage = connect(mapStateToProps)(PlayerPage);
export { connectedPlayerPage as PlayerPage };
