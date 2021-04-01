import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';

export const Header = (props: any) => {
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
          <Link className="navbar-brand" to="/roster">
            Player App
          </Link>
        </Typography>
        <nav>
          <Link to="/roster" className={classes.link}>
            Roster
          </Link>
          <Link to="/player/new" className={classes.link}>
            Add New Player
          </Link>
          <Link
            to="https://github.com/khite95/roster-app"
            className={classes.link}
          >
            Github
          </Link>
        </nav>
        <Button color="primary" variant="outlined" className={classes.link}>
          <Link to="/login">Logout</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
