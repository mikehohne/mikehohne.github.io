import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../shared/fonts/fonts.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    fontFamily: 'Damion, cursive',
    fontSize: '2em'
  },
  avatar: {
    width: '250px',
    height: '250px'
  },
  nameContainer: {
    textAlign: 'center'
  }
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Avatar
          className={classes.avatar}
          variant='square'
          alt='bio-image'
          src='https://via.placeholder.com/250'
        />
        <div className={classes.nameContainer}>
          <p>Mike Hohne</p>
          <p>Developer</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
