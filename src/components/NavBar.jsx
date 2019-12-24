import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  toolBar: {
    display: 'flex'
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  title: {
    alignSelf: 'initial',
    flexGrow: 1
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root} position='static'>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant='h6'>
            <Link className={classes.link} to='/'>
              Mike Hohne
            </Link>
          </Typography>
          <Button>
            <Link className={classes.link} to='/portfolio'>
              Portfolio
            </Link>
          </Button>
          <Button>
            <Link className={classes.link} to='/test'>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
