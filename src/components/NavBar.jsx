import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {},
  toolBar: {
    display: 'flex'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  title: {
    alignSelf: 'initial',
    flexGrow: 1
  },
  time: {
    fontSize: '12px'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');
  const format = 'hh:mm a';
  const [time, setTime] = React.useState(moment(new Date()).format(format));

  React.useEffect(() => {
    const date = moment(new Date());
    setInterval(() => setTime(date.format(format), 3000));
    return () => clearInterval();
  });

  return (
    <>
      <AppBar className={classes.root} position='static'>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant='h6'>
            <Link className={classes.link} to='/'>
              {matches ? 'MH' : 'Mike Hohne'}
            </Link>
          </Typography>
          <Button>
            <Link className={classes.link} to='/portfolio'>
              Portfolio
            </Link>
          </Button>
          <Button>
            <Link className={classes.link} to='/contact'>
              Contact
            </Link>
          </Button>
          <span className={classes.time}>{time}</span>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
