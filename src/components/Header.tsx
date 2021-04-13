import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';

export const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/roster"
            className="navbar-brand"
          >
            Player App
          </Button>
        </Typography>
        <nav>
          <Button
            variant="contained"
            component={Link}
            to="/roster"
            className={classes.link}
          >
            Roster
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/player/new"
            className={classes.link}
          >
            Add New Player
          </Button>
          <Button variant="text" className={classes.link}>
            <Link to="https://github.com/khite95/roster-app">Github</Link>
          </Button>
        </nav>
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to="/login"
          className={classes.link}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
