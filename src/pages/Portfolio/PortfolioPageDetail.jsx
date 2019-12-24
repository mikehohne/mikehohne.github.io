import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const PortfolioPageDetail = props => {
  const { project } = props.location.state;
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant='h4'>{project.title}</Typography>
      </div>
    </>
  );
};

export default PortfolioPageDetail;
