import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  }
}));

const MainContainer = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth='md'>
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
