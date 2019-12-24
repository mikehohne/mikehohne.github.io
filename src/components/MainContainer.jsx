import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    height: '100vh'
  }
}));

const MainContainer = props => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} maxWidth='md'>
        {props.children}
      </Container>
    </>
  );
};

export default MainContainer;
