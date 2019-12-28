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
    width: '300px',
    height: '300px',
    borderRadius: '4px'
  },
  nameContainer: {
    textAlign: 'center',
    '& p': {
      textDecoration: 'underline'
    }
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
          src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1800339_10100453854274501_6543181869932306714_n.jpg?_nc_cat=110&_nc_ohc=NsEB7V3Qtr0AQl58dCP_Tyvd8ar7PT6F0w-7ttpjG2AAPco6hu0pGyOww&_nc_ht=scontent-sea1-1.xx&oh=ae6728377f96b45d849ca7019615f356&oe=5EAE9D46'
        />
        <div className={classes.nameContainer}>
          <p>
            Mike Hohne - <span>Developer</span>
          </p>
          {/* <p>Developer</p> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
